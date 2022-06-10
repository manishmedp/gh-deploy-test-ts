#!/bin/sh

set -eu

# echo $SERVER_SSH_KEY >> ssh_private_key.pem
# chmod 400 ssh_private_key.pem
# ssh -i ssh_private_key.pem ec2-user@$AWS_HOST
cd ~/ghDeploy 
npm i

if pm2 ls | grep ghDeploy-dev 
then
    pm2 del ghDeploy-dev
    cd ~/ghDeploy
    pm2 start
elif
    cd ~/ghDeploy
    pm2 start
fi