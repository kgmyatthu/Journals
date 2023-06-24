---
tags: linux, arch
---
# Into
This is a very high level summary guide on installing Arch linux. This is not step by step tutorial for beginner. 

# Prerequisite
- Secure Boot Disabled
- Check if your system is UEFI or BOIS
- Burn the Arch linux iso on a usb device

# Installation
Reboot the machine pick usb device in bootloader and proceed to following.

## Keymaps
Keymap are highly individual specific depending on the keyboard one would use. RTFM.

## Internet
Internet connection is necessary to make successful install pick wired connection or wireless 

### Wired Connection
If the machine has physical wire connection this step is done.
Run `ping www.google.com` 
If network timeout or any indication of failed network connectivity - RTFM.

### Wireless Connection
To get interactive wifi connection prompt, do `iwctl`

`help`

`device list` , display a list of devices capable to do wireless connections.

`station wlan1 scan` Note, (wlan1) is not constant it may or may not be different for machine to machine.

`station wlan1 get-networks` Display previously scan wifi(s) access points.

`station wlan connect "my wifi"` Connect to the wifi, if one's wifi has wpa2 enable , iwctl will as passphrase, act accordingly.

Once the machine is sure of internet connectivity, do `timedatectl set-ntp true`.

## Mirrors
Optimize the mirrors according to machine's physical location.

### Install mirror configuration tool

`pacman -Sy reflector`

### Configure mirrors with Reflector 
Make a list of country that's closet to the machine's physical location.

```
reflector -c "Switzerland","United State" --latest 6 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

`pacman -Syyy`

## Partitioning

Check the partitions with `lsblk` 

Apply partition with `cfdisk` 

Format the partition for primary filesystem (ext4) `mkfs.ext4 /dev/sda1`

Format the partition for swap `mkswap /dev/sda2` `swapon /dev/sda2`

## Mounting 

Mount the filesystem with `mount /dev/sda1 /mnt`

Create dir to mount boot `mkdir /mnt/boot`

Mount the boot partition with `mount /dev/sda3 /mnt/boot`

## Base install
`pacstrap /mnt base linux linux-headers linux-firmware vim`

## FSTAB
Generate FSTAB - `genfstab -U /mnt >> /mnt/etc/fstab`
Check it `/mnt/etc/fstab`

## Chroot
`arch-chroot /mnt`

## Locales
- Search your timezone 
    ```
    timedatectl list-timezones | grep Yangon
    ```

- Apply timezone 
    ```
    ln -sf /usr/share/zoneinfo/Asia/Yangon /etc/localtime
    ``` 
	
    ```
    hwclock --systohc
    ```

- Apply locale 
    ```
    vim /etc/locale.gen
    ``` 

    ```
    locale-gen
    ``` 
	
    ```
    echo "LANG=en_US.UTF-8" >> /etc/locale.conf
    ```
## Hostname

```
vim /etc/hostname
Arch
```
```
vim /etc/hosts
127.0.0.1   localhost
::1         localhost
127.0.1.1   arch.localdomain    arch
```
## Set Root password
Do `passwd` as root user

## GRUB 
- Install necessary packages
```bash
    pacman -Sy grub efibootmgr os-prober ntfs-3g networkmanager network-manager-applet wireless_tools wpa_supplicant dialog mtools osfstools base-devel git bluez bluez-utils openssh
```

- Install Grub (EFI)
    ```
    grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=Arch
    ```
- Grub config
    ```
    grub-mkconfig -o /boot/grub/grub.cfg
    ```
	
## Enable system services

- Network - `systemctl enable NetworkManager`
- Bluetooth - `systemctl enable bluetooth`
- SSH - `systemctl enable sshd`

## New User
- Add user ` useradd -mG wheel kmt` `passwd kmt`
- Make wheel group sudo `EDITOR=vim visudo` and uncomment `%wheel ALL=(ALL) ALL`

## Finish Installation
- exit chroot `exit`
- unmount `umount -a`
- reboot `reboot`
