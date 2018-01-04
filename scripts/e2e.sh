#!/bin/bash
set -ev

if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [[ "$TRAVIS_PULL_REQUEST_BRANCH" = "feature/"* ]]
then

  echo 'Bulding and testing end-to-end with SauceLabs'
  npm run build
  pushd ./build
  python -m SimpleHTTPServer 3000 & popd
  curl http://localhost:3000
  npm run e2e

fi
