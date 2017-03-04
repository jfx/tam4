#!/bin/bash
DATA_DIR=`dirname $0`/../data
ts-node $DATA_DIR/loadTestSprintActions.ts
ts-node $DATA_DIR/loadTestTodayActions.ts
