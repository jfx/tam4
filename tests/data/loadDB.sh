#!/bin/bash
DIR=`dirname $0`
ts-node $DIR/loadSprintActions.ts
ts-node $DIR/loadTodayActions.ts
