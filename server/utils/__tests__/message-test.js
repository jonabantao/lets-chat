const { generateMessage } = require('../message');

describe('generateMessage', () => {
  test('should generate the correct message object', () => {
    const from = 'Test';
    const text = 'Message';
    const message = generateMessage(from, text);

    expect(message).toEqual(expect.objectContaining({
      from: expect.any(String),
      text: expect.any(String),
      createdAt: expect.any(Number)
    }));
  });
});