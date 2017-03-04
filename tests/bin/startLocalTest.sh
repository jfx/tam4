#!/bin/bash
DATA_DIR=`dirname $0`/../data
cp -f $DATA_DIR/local-ref.json $DATA_DIR/local-test.json
json-server --watch $DATA_DIR/local-test.json --port 3001 &
echo $! > $DATA_DIR/json-server-local-test.pid
cd `dirname $0`/../..
ng serve --env=test-local --port 4201 &
echo $! > $DATA_DIR/ng-server-local-test.pid
