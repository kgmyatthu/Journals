---
tags: debugger, neovim, vim
---
## Download `codelldb` binary
To obtain `codelldb` binary, either install vscode extension lldb or download it using `mason` plugin.
The path will be differs based on the method used to downloaded. Use google to figure out `path/to/codelldb`.


## Setting up adapter config
The generic way codelldb work with nvim dap in a conceptuall level would be , have a debugging server running on a port like this mannually `codelldb --port 1337` . and have nvim-dap connect to it.
But a better way is to launch the server automatically by the adapter and then connect to it. This was quite a headache until i came across a chinese dev forum. 

> [!Important]
> Depending on your system, you may need to compile your app with debugger symbols
>See [How to compile c/c++ with debugging symbols](https://help.totalview.io/previous_releases/2020.3/HTML/index.html#page/TotalView/totalviewlhug-appendix-compiling.29.2.html).
>


```lua

 dap.adapters.codelldb = function(on_adapter)
   -- This asks the system for a free port
   local tcp = vim.loop.new_tcp()
   tcp:bind('127.0.0.1', 0)
   local port = tcp:getsockname().port
   tcp:shutdown()
   tcp:close()
 
   -- Start codelldb with the port
   local stdout = vim.loop.new_pipe(false)
   local stderr = vim.loop.new_pipe(false)
   local opts = {
     stdio = {nil, stdout, stderr},
     args = {'--port', tostring(port)},
   }
   local handle
   local pid_or_err
   handle, pid_or_err = vim.loop.spawn('/path/to/lldb', opts, function(code)
     stdout:close()
     stderr:close()
     handle:close()
     if code ~= 0 then
       print("codelldb exited with code", code)
     end
   end)
   if not handle then
     vim.notify("Error running codelldb: " .. tostring(pid_or_err), vim.log.levels.ERROR)
     stdout:close()
     stderr:close()
     return
   end
   vim.notify('codelldb started. pid=' .. pid_or_err)
   stderr:read_start(function(err, chunk)
     assert(not err, err)
     if chunk then
       vim.schedule(function()
         require("dap.repl").append(chunk)
       end)
     end
   end)
   local adapter = {
     type = 'server',
     host = '127.0.0.1',
     port = port
   }
   -- 💀
   -- Wait for codelldb to get ready and start listening before telling nvim-dap to connect
   -- If you get connect errors, try to increase 500 to a higher value, or check the stderr (Open the REPL)
   vim.defer_fn(function() on_adapter(adapter) end, 1000)
 end
 
 -- don't forget to compile/build with debug symbols, otherwise it won't work.
 dap.configurations.cpp = {
   {
     name = "runit",
     type = "codelldb",
     request = "launch",
 
     program = function()
       return vim.fn.input('', vim.fn.getcwd() , 'file')
     end,
 
     args = {"--log_level=all"},
     cwd = "${workspaceFolder}",
     stopOnEntry = false,
     terminal = 'integrated',
 
     pid = function()
             local handle = io.popen('pgrep hw$')
             local result = handle:read()
             handle:close()
             return result
     end
   },
 }

 dap.configurations.c = dap.configurations.cpp
 dap.configurations.h = dap.configurations.cpp
 dap.configurations.rust = dap.configurations.cpp
 
```


[[Arch Linux Installation guide]]