#!/bin/bash

ssh -p 2222 root@188.245.201.83 "cd /var/www/server && cd /var/www/server/logs && tail -500 app.log"