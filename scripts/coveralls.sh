#!/bin/bash
set -ev

if [ "$TRAVIS_BRANCH" = "develop" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]
then

  echo 'Sending coverage info to coveralls.io'
  cat ../coverage/lcov.info | ../node_modules/coveralls/bin/coveralls.js

fi
