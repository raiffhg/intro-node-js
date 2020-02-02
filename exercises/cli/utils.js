const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  return fs.readFileSync("./contacts.json","utf8");
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  let data = JSON.stringify(contacts);
  fs.writeFileSync("./contacts.json", data, "UTF-8",{'flags': 'a+'});
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

