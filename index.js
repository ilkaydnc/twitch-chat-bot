const tmi = require('tmi.js')
const { username, oauth } = require('./config')

class Channel {
  constructor(name) {
    this.name = name
    this.options = {
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
      channels: [this.name],
    }

    this.client = new tmi.client(this.options)
  }

  connect() {
    this.client
      .connect()
      .then((data) => console.log('connected', data))
      .catch((err) => {
        throw new Error(err)
      })
  }
}

const test = new Channel('1stkingloki')

test.connect()
