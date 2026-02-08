#!/bin/bash

#Deploying only the server.js file to the server
scp -r ./server/. root@188.245.201.83:/var/www/server/.
