#!/bin/bash
DATA_DIR=`dirname $0`/../data
kill $(cat $DATA_DIR/ng-server-remote-test.pid)
rm -f $DATA_DIR/ng-server-remote-test.pid
