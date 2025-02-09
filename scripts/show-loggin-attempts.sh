#!/bin/bash


# Security 
# Hackers commonly use brute force attacks to gain access to servers with common usernames like root/administrator/ubuntu/debian etc.
# This script will show the last 500 lines of the log file to show the login attempts on the server.

ssh -p 2222 root@188.245.201.83 "sudo grep "Failed password" /var/log/auth.log | tail -500"

# If needed, block the IP address (FW) of the attacker with the following command:
# sudo ufw deny from 80.242.208.68