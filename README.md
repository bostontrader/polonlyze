[![Build Status](https://travis-ci.org/bostontrader/polonlyze.svg?branch=master)](https://travis-ci.org/bostontrader/polonlyze)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/bostontrader/polonlyze.svg)](https://david-dm.org/bostontrader/polonlyze)
[![devDependency Status](https://david-dm.org/bostontrader/polonlyze/dev-status.svg)](https://david-dm.org/bostontrader/polonlyze#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bostontrader/polonlyze/badge.svg)](https://snyk.io/test/github/bostontrader/polonlyze)

# Introduction

The information about your Poloniex account that Polo provides is randomly scattered over several reports/API endpoints. Not only is the information rather disorganized, but it is in fact incomplete.  It's extremely tedious to pick it apart in order to perform any analysis such as to ensure that it's all internally consistent or to compare it to other independent records.

In order to solve this problem, this software will query the Polo API, cast the results into a more sensible format, and perform integrity checks.

# Getting Started

Node 8.4 is a prerequisite.

```
git clone http://github.com/bostontrader/polonlyze
cd polonlyze
npm install
npm test
```

## Key file

The Polo API needs an API key and a secret in order to function.  We have to feed this info into the program somehow.  It's tempting to do this via command-line arguments.  However, doing so would leak this information into bash_history and probably other places as well.  Better to use a config file.

**WARNING**: You don't want this info to get into the wrong hands.  You may want to inspect this code to ensure that it behaves itself.

## Execution examples

```
polonlyze --help
polonlyze --keyFile keys-private.js -el -t 2017-01-01T00:00:00Z -u 2017-01-31T00:00:00Z
```

In the 2nd example we generate results for the Exchange and Lending sub-accounts during the period of January 2017.  Notice that the resolution of the times is one second, which is what the Polo API supports.

## --nonceOffset

Every API calls includes a "nonce" that should always be more than the previous one.  Sometimes this gets fubared and we get an error that says that the nonce is too low and needs to exceed some value.  If so, we need to simply add some magic constant to fix this.


# A Few Words About Testing

The essential core of this program is ability to read the Polo API and cast it into a more sensible format. Although I provide polonlyze.js as a convenient command-line UI to this functionality, it not the main course and I don't test it.  The UI invokes polonlyze-core with the appropriate arguments and polonlyze-core will hopefully create the expected outputs.  This I unit test.

## Regarding unit testing:

polonlyze-core is a collaborator that orchestrates the functionality of the other little pieces.

1. I want to test various "interesting" combinations of input arguments and test that appropriate responses were created.

2. I can use test doubles for the API calls.

# Dependencies

* commander - Command line interface

# devDependencies

* ava - Unit testing

* nyc - Unit testing code coverage


# Tipjar
BTC: 1NyKNEAiF5VfSivXi9C9sXbsThpYjz1RUE
LTC: LQiT8imDmeQgErJsohA5DJhXYF2rMkcku8
CLAM: xQs7jvwin9SPy3oBjQyrYTNCZp62pp1qzU
