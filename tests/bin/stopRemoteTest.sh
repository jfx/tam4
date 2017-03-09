#!/bin/bash
DATA_DIR=`dirname $0`/../data

if [ -f $DATA_DIR/ng-server-remote-test.pid ]
then
   echo "Stop ng server remote test ..."
   kill $(cat $DATA_DIR/ng-server-remote-test.pid)
   rm -f $DATA_DIR/ng-server-remote-test.pid
fi
