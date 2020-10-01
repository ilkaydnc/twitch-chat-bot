const tmi = require('tmi.js')
const { username, oauth, channels } = require('./config')

const options = {
  options: {
    debug: false,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username,
    password: oauth,
  },
  channels,
}

const client = new tmi.client(options)

client
  .connect()
  .then((data) => console.log('connected', data))
  .catch((err) => {
    throw new Error(err)
  })

client.on('message', (channel, args, message, self) => {
  console.log(channel, message)
})
