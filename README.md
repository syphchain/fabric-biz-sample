# Fabric Demo Project

Bill Endorse used the blockchain

## deploy
操作命令时可能 使用 `sudo`

- 安装node(要求6.9.0-6.10.0)

- 安装npm

- 安装git

- 安装docker

- 安装docker-compose

- 下载fabric镜像

- 启动脚本

```
cd trainingProjects/billEndorse 
npm install
// 需要保证fabric-client 和 fabric-ca-client两个依赖包的版本在1.0.0
// 启动node时会报错有可能是这两个包下载不全 应 `npm uninstall fabric-client` & `npm uninstall fabric-ca-client` 之后再重新安装这两个包
npm install -g bower

cd trainingProjects/billEndorse/public/ng
bower install
// 安装包时要确认一些包的版本 选择对应序号 敲回车即可

cd trainingProjects/billEndorse 
./setupFabricNetwork.sh
./createChannelAndInstallChaincode.sh
```
access http://localhost:4000/ng/src/

## Issue

由于 fork 过来的项目没办法发 issue，暂时把 issue 记录在这里吧

- [ ] issue 1 加入区块浏览器支持，@sunyoubo, @2018-12-14 之前完成
