#!/bin/bash

#Deploying only the server.js file to the server
scp -r ./server/server.js root@188.245.201.83:/var/www/server/server.js
