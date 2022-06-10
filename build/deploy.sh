#!/bin/sh

set -eu

# echo $SERVER_SSH_KEY >> ssh_private_key.pem
# chmod 400 ssh_private_key.pem
# ssh -i ssh_private_key.pem ec2-user@$AWS_HOST
cd ~/ghDeploy 
npm i
pm2 del ghDeploy-dev
pm2 start ghDeploy-dev