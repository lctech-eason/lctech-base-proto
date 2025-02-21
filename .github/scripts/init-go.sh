#! /bin/bash

# This script is init script for the project.
# create a new go project
# How to use:
# shell.sh <project-name> 

PROJ_NAME="$1"

# Check if go.mod exists
if [ -f go.mod ]; then
    echo "go.mod has already been created"
else
    echo "Creating go.mod"
    go mod init github.com/"$PROJ_NAME"
    # go get github.com/golang/protobuf
    # go get google.golang.org/grpc
fi
