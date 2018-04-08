const uuidv1 = require('uuid/v1');

const generateMessage = (from, text) => ({
  from,
  text,
  createdAt: new Date().getTime(),
  id: uuidv1(),
});

const generateLocationMessage = (from, lat, lng) => ({
  from,
  url: `https://www.google.com/maps?q=${lat},${lng}`,
  createdAt: new Date().getTime(),
  id: uuidv1(),
});

module.exports = { generateMessage, generateLocationMessage };
