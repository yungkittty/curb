#!/bin/bash


echo "${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH}" | tr "/" "-"
