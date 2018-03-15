---
title: bash命令
---
主流的操作系统有windows mac linux 当然mac属于红帽的一个封装的版本说是属于Linux也行，当然这些都不重要了，windows下的命令工具叫做dos Linux下的命令行工具叫做bash，dos在这里就不多说了，说说bash

### 隐藏Mac隐藏文件的命令

``` bash
$ defaults write com.apple.finder AppleShowAllFiles -bool false
```

### 显示Mac隐藏文件的命令

``` bash
$ defaults write com.apple.finder AppleShowAllFiles -bool true
```

### 查询端口的pid然后结束进程

``` bash
$ lsof -i:端口号(8080)
   
```
``` bash
$ kill -9 pid号

``` 

### 查看工具的进程号

``` bash
$ ps -ef | grep 工具名(例如nginx)
```

### 查看读写权限

``` bash
$ ls -l
```
### 复制文件

``` bash
$ cp 路径 ‘目标路径’
```
### 创建一个空文件夹

``` bash
$ mkdir ‘name’
```
### 删除一个空文件夹

``` bash
$ rmdir 'name'
```
### 删除文件夹下的所有文件

``` bash
$ rm -rf ‘文件夹名字’
```
### 新建一个文件

``` bash
$ touch '文件名字'
```

mac 与 liux bash的区别
tar 
解包：tar xvf FileName.tar
打包：tar cvf FileName.tar DirName
（注：tar是打包，不是压缩！）
———————————————
.gz
解压1：gunzip FileName.gz
解压2：gzip -d FileName.gz
压缩：gzip FileName

.tar.gz 和 .tgz
解压：tar zxvf FileName.tar.gz
压缩：tar zcvf FileName.tar.gz DirName
———————————————

　tar –xvf file.tar //解压 tar包
　unzip file.zip //解压zip















