#!/bin/bash
set -ev

if [ "$TRAVIS_BRANCH" = "develop" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]
then

  echo 'Sending coverage info to coveralls.io'
  npm run coveralls

fi
