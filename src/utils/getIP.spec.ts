import getLocalIPAddress from './getIP';

describe('Tesing getIP function', () => {
  it('Testing IP', () => {
    const out = getLocalIPAddress();
    console.log(out);
    try {
      expect(out).toBe('192.168.0.101');
    } catch (error) {
      expect(out).toBe('127.0.0.1');
    }
  });
});
