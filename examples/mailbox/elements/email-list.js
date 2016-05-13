const dateformat = require('dateformat')
const choo = require('../../../')

module.exports = function (params, state, send) {
  const mailbox = params.mailbox
  return choo.view`
    <div>
      ${createHeader()}
      ${state[mailbox + ':messages'].map(function (msg) {
        return createMessage(msg, mailbox)
      })}
    </div>
  `
}

function createHeader () {
  return choo.view`
    <div class="db cf w-100">
      <div class="fl mb3 w-25 mt0 b">Date</th>
      <div class="fl mb3 w-25 mt0 b">Subject</th>
      <div class="fl mb3 w-25 mt0 b">From</th>
      <div class="fl mb3 w-25 mt0 b">To</th>
    </div>
  `
}

function createMessage (message, mailbox) {
  return choo.view`
    <div class="db cf w-100">
      <a href="${'/' + mailbox + '/' + message.id}">
        <div class="fl mb3 w-25 f6 link">
          ${dateformat(message.date, 'mmmm dS')}
        </div>
        <div class="fl mb3 w-25 f6 link">${message.subject}</div>
        <div class="fl mb3 w-25 f6 link">${message.from}</div>
        <div class="fl mb3 w-25 f6 link">${message.to}</div>
      </a>
    </div>
  `
}