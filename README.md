# Fabric Demo Project

Bill Endorse used the blockchain

## deploy
操作命令时可能 使用 `sudo`

- 安装[node](https://www.cnblogs.com/guanine/p/9392411.html)(要求>=8.9.0, <9.0)

or https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
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
或者
```
$ wget https://github.com/docker/compose/releases/download/1.20.1/docker-compose-Linux-x86_64
$ chmod +x docker-compose-Linux-x86_64
$ sudo mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
```


- 启动脚本

```bash
cd fabric-biz-sample/billEndorse
npm install
npm install -g bower
npm install -g forever

cd fabric-biz-sample/billEndorse/public/ng
bower install

cd fabric-biz-sample/billEndorse
sudo ./setupFabricNetwork.sh

# 运行，创建通道，安装cc，实例化cc，测试invoke，测试 query
sudo apt-get install jq

# Start server
./startServer.sh

# 运行，创建通道，安装cc，实例化cc，测试invoke，测试 query
./installBillCc.sh
```
access http://localhost:4000/ng/src/


- 启动区块浏览器

启动区块浏览器前需要完成Fabric网络的启动并且创建完成默认channel和安装chaincode。
即已经执行完成如下脚本：
```
./setupFabricNetwork.sh
./installBillCc.sh
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
