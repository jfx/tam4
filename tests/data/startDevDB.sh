#!/bin/bash
DIR=`dirname $0`
cp -f $DIR/devDB-ref.json $DIR/devDB.json
json-server --id $key --watch $DIR/devDB.json
