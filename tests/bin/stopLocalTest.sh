#!/bin/bash
DATA_DIR=`dirname $0`/../data

if [ -f $DATA_DIR/ng-server-local-test.pid ]
then
   echo "Stop ng server local test ..."
   kill $(cat $DATA_DIR/ng-server-local-test.pid)
   rm -f $DATA_DIR/ng-server-local-test.pid
fi

if [ -f $DATA_DIR/json-server-local-test.pid ]
then
   echo "Stop json server local test ..."
   kill $(cat $DATA_DIR/json-server-local-test.pid)
   rm -f $DATA_DIR/json-server-local-test.pid
fi
