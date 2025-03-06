#!/bin/bash

LINES=${1:-100}

#show last n lines of auth.log | default 100 lines
ssh root@188.245.201.83 "sudo tail -n $LINES /var/log/auth.log"
