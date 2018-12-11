# Fabric Demo Project

Bill Endorse used the blockchain

## deploy
操作命令时可能 使用 `sudo`

- 安装[node](https://www.cnblogs.com/guanine/p/9392411.html)(要求6.9.0-6.10.0)

- 安装[npm](https://www.cnblogs.com/guanine/p/9392411.html)

- 安装git
```bash
sudo apt install git
```

- 安装[docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)
```bash
# 如果没有curl命令
sudo apt install curl
sudo curl -fsSL https://get.docker.com/ | sh
```

- 安装[docker-compose](https://docs.docker.com/compose/install/#install-compose)
```bash
# 先安装pip
sudo apt install python pip
sudo pip install docker-compose
```

- 下载fabric镜像
```bash
# 克隆compose模板文件
sudo git clone https://github.com/yeasy/docker-compose-files
# 找到对应版本的镜像v1.3.0最新版本
cd /docker-compose-files/hyperledger_fabric/v1.3.0
# 执行镜像下载脚本
scripts/download_images.sh

```

- 启动脚本

```bash
cd fabric-biz-sample/billEndorse
npm install
# 需要保证fabric-client 和 fabric-ca-client两个依赖包的版本在1.0.0
# 启动node时会报错有可能是这两个包下载不全 应 `npm uninstall fabric-client` & `npm uninstall fabric-ca-client` 之后再重新安装这两个包
npm install -g bower

cd fabric-biz-sample/billEndorse/public/ng
bower install
# 安装包时要确认一些包的版本 选择对应序号 敲回车即可

cd fabric-biz-sample/billEndorse
./setupFabricNetwork.sh
./createChannelAndInstallChaincode.sh
```
access http://localhost:4000/ng/src/


- 启动区块浏览器

启动区块浏览器前需要完成Fabric网络的启动并且创建完成默认channel和安装chaincode。
即已经执行完成如下脚本：
```
./setupFabricNetwork.sh
./createChannelAndInstallChaincode.sh
```

1.修改explorer_config.json中的配置

主要需要调整的为peers和orderers的IP地址

2.启动浏览器：
```
./start_explorer.sh
```
3.使用浏览器访问：
```
http://localhost:8090
```