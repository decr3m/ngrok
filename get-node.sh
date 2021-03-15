#!/bin/dash
apt update && upgrade -y
apt install nodejs -y
pkg install yarn -y
npm i pm2 -g