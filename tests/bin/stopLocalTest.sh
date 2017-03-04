#!/bin/bash
DATA_DIR=`dirname $0`/../data
kill $(cat $DATA_DIR/ng-server-local-test.pid)
rm -f $DATA_DIR/ng-server-local-test.pid
kill $(cat $DATA_DIR/json-server-local-test.pid)
rm -f $DATA_DIR/json-server-local-test.pid
