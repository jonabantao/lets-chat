const { generateMessage, generateLocationMessage } = require('../message');

describe('generateMessage', () => {
  test('should generate the correct message object', () => {
    const from = 'Test';
    const text = 'Message';
    const message = generateMessage(from, text);

    expect(message).toEqual(expect.objectContaining({
      from: 'Test',
      text: 'Message',
      createdAt: expect.any(Number),
    }));
  });
});

describe('generateLocationMessage', () => {
  test('should generate the correct message object', () => {
    const from = 'Test';
    const lat = 27.54503;
    const lng = 39.47252;
    const message = generateLocationMessage(from, lat, lng);

    expect(message).toEqual(expect.objectContaining({
      from: 'Test',
      url: `https://www.google.com/maps?q=${lat},${lng}`,
      createdAt: expect.any(Number),
    }));
  });
});
