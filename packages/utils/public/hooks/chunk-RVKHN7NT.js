'use strict';

var zod = require('@hookform/resolvers/zod');
var reactHookForm = require('react-hook-form');

function m({schema:e,...o}){return reactHookForm.useForm({...o,resolver:zod.zodResolver(e)})}

exports.a = m;
