#!/bin/bash

LINES=${1:-500}

#show last n lines of app.log | default 500 lines
ssh root@188.245.201.83 "cd /var/www/server/logs && tail -n $LINES app.log"