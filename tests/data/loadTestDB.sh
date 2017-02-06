#!/bin/bash
DIR=`dirname $0`
ts-node $DIR/loadTestSprintActions.ts
ts-node $DIR/loadTestTodayActions.ts
