---
id: nvmwindows
title: NVM for Windows
sidebar_label: NVM for Windows
---

tl;dr Install node on Windows without getting Access Denied errors.

## Install NVM for Windows

- run `nvm-setup.exe` as Admin to install nvm-windows

I did not change the default install location.

## Install a Node Version

After installation you need to run cmd as Admin to install a node version
and then use it.

- run `cmd.exe` as Admin
    - `nvm install X.X.X`
    - `nvm use X.X.X`

Now node should work in cmd.exe, Powershell, and Git Bash.
