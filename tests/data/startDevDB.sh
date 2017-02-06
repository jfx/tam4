#!/bin/bash
DIR=`dirname $0`
cp -f $DIR/devDB-ref.json $DIR/devDB.json
json-server --watch $DIR/devDB.json
