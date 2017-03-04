#!/bin/bash
DATA_DIR=`dirname $0`/../data
cd `dirname $0`/../..
ng serve --env=test-remote --port 4202 &
echo $! > $DATA_DIR/ng-server-remote-test.pid
