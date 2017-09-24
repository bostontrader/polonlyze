[![Build Status](https://travis-ci.org/bostontrader/polonlyze.svg?branch=master)](https://travis-ci.org/bostontrader/polonlyze)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/bostontrader/polonlyze.svg)](https://david-dm.org/bostontrader/polonlyze)
[![devDependency Status](https://david-dm.org/bostontrader/polonlyze/dev-status.svg)](https://david-dm.org/bostontrader/polonlyze#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bostontrader/polonlyze/badge.svg)](https://snyk.io/test/github/bostontrader/polonlyze)

# Introduction

The information about your Poloniex account that Polo provides is randomly scattered over several reports/API endpoints. Not only is the information rather disorganized, but it is in fact incomplete.  It's extremely tedious to pick it apart in order to perform any analysis such as to ensure that it's all internally consistent or to compare it to other independent records.

In order to solve this problem, this software will query the Polo API, cast the results into a more sensible format, and perform integrity checks.

# Getting Started

```
git clone http://github.com/bostontrader/polonlyze
cd polonlyze
npm install
npm test
```

# Dependencies

# devDependencies

* ava - Unit testing

* nyc - Unit testing code coverage


# Tipjar
BTC: 1NyKNEAiF5VfSivXi9C9sXbsThpYjz1RUE
LTC: LQiT8imDmeQgErJsohA5DJhXYF2rMkcku8
CLAM: xQs7jvwin9SPy3oBjQyrYTNCZp62pp1qzU
