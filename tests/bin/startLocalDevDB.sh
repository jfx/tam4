#!/bin/bash
DATA_DIR=`dirname $0`/../data
cp -f $DATA_DIR/local-ref.json $DATA_DIR/local-dev.json
json-server --watch $DATA_DIR/local-dev.json
