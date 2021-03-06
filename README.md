# TAM4
[![Software License](https://img.shields.io/badge/license-GPL%20v3-green.svg?style=flat)](LICENSE)
[![Code Climate](https://codeclimate.com/github/jfx/tam4/badges/gpa.svg)](https://codeclimate.com/github/jfx/tam4)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e1aa5ceea14a4743b5b6a35ca6858b73)](https://www.codacy.com/app/jfx/tam4?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jfx/tam4&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/jfx/tam4.svg?branch=master)](https://travis-ci.org/jfx/tam4)
[![codecov](https://codecov.io/gh/jfx/tam4/branch/master/graph/badge.svg)](https://codecov.io/gh/jfx/tam4)
[![Coverage Status](https://coveralls.io/repos/github/jfx/tam4/badge.svg?branch=master)](https://coveralls.io/github/jfx/tam4?branch=master)

TAM4 for Time Actions Management is a personal productivity app.

tam4 features :

* Web interface,
* Open source.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running Robot Framework tests
Prerequisites : 
- Install ts-node and typescript with npm,
- Install json-server : npm install -g json-server,
- Install Robot Framework, Selenium2Library, chromedriver or geckodriver. 

For local tests (json-server) : 
- In project dir run : ./tests/bin/startLocalTest.sh
- In project dir run : robot -v ENV:LOCAL tests/RF
- At end : ./tests/bin/stopLocalTest.sh

For remote tests (firebase) : 
- In project dir run : ./tests/bin/startRemoteTest.sh
- In project dir run : robot -v ENV:REMOTE tests/RF
- At end : ./tests/bin/stopRemoteTest.sh

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
