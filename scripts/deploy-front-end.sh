#!/bin/bash

set -e #exit on any error

mkdir -p ~/.ssh
echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan -p 2222 188.245.201.83 >> ~/.ssh/known_hosts #ass server to known hosts - so it does not ask for confirmation when connecting to the server for the first time
scp -p 2222 -r ./dist/. root@188.245.201.83:/var/www/html/.