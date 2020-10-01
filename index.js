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

  listenMessages() {
    client.on('message', (channel, userstate, message, self) => {
      if (self) return

      // Handle different message types..
      switch (userstate['message-type']) {
        case 'action':
          // This is an action message..
          break
        case 'chat':
          // This is a chat message..
          break
        case 'whisper':
          // This is a whisper..
          break
        default:
          // Something else ?
          break
      }
    })
  }
}

const test = new Channel('1stkingloki')

test.connect()
