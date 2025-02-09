#!/bin/bash


# Security 
# Hackers commonly use brute force attacks to gain access to servers with common usernames like root/administrator/ubuntu/debian etc.
# This script will show the last 500 lines of the log file to show the login attempts on the server.

ssh root@188.245.201.83 "sudo tail -f /var/log/auth.log"
