'use strict'

const t = require('tap')
const test = t.test
const fastify = require('..')()

test('Instance should export the fastify version', t => {
  t.plan(1)
  t.type(fastify.version, 'string')
})
