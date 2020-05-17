#!/usr/bin/env node
'use strict'
const concat = require('ganescha-concat');
const fs = require('fs');
const [,, output, ...files] = process.argv;

concat(files, output).then(() => console.log('ganescha-concat done')).catch(console.error);