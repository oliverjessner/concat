#!/usr/bin/env node
'use strict'
const concat = require('./index.js');
const fs = require('fs');
const [, output, ...files] = process.argv;

concat(files, output);
console.log('ganescha-concat done');