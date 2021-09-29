/* eslint-disable @typescript-eslint/no-var-requires */
const MockAdapter = require('axios-mock-adapter')
const axios = require('axios')
const Mock = new MockAdapter(axios)
export default Mock
