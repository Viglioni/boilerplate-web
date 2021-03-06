/* eslint @typescript-eslint/no-var-requires: "off" */
const { or } = require('ramda')

const environment = or(process.env.NODE_ENV, 'dev')

const env = {
  dev: {
    enviroment: 'dev',
  },
  staging: {
    enviroment: 'staging',
  },
  production: {
    enviroment: 'production',
  },
}[environment]

module.exports = env
