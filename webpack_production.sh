#!/usr/bin/env bash
# Rebuilds assets for production including obfuscation.
NODE_ENV=production ./node_modules/.bin/webpack $1 $2 $3 $4 $5 $6 $7 $8 $9
