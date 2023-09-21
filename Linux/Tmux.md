---
tags:
  - Linux
  - Unix
  - Shell
date: 2023-09-21
---

Tmux is terminal multiplexer, this is one of the tool that i can't live without when i'm doing any computer scientisy work. Although it's not a big deal using cursor when i'm on laptop because keyboard to touch pad travel is very close but when i'm in a traditional keyboard mouse setup it's very terrible experience for me to constantly overworking my right hand to switch between mouse and keyboard. Tmux paird with vim really allow me mouse free or very minimal mouse usage development workflow. Here are some of the most used commands.

# Session

`ctrl-b :new` create new session

`ctrl-b $` rename current session

`ctrl-b s` switch between session

# Detach

`ctrl-b d` detach a session which is very useful because you can attach it back again later even if your remote ssh connection drop and your work progress can be continue from where you left off by just doing the command `tmux`.

# Pane

`ctrl-b %` split a pane vertically, it spawn a new shell vertically on the left side of your current shell.

`ctrl-b "` split a pane horizontally, it spawn a new shell horizontally under the current shell.

![](../Attachements/Pasted%20image%2020230823190414.png)

Here's an example of how pane look, it had one shell on the left side and 3 horizontally split shell in the right side.