'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function a(...r){return tailwindMerge.twMerge(clsx.clsx(r))}

exports.a = a;
