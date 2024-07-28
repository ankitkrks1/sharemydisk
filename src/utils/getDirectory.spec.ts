import path from 'path';
import getDirectory from './getDirectory';
describe('Testing getDirectory fun', () => {
  it('Testing by providing parameter :: ', () => {
    //  console.log('test')
    const out = getDirectory(['node', '-d', './', '-p', '80']);
    expect(out).toBe('./');
  });

  it('Testing by not giving any parameter :: ', () => {
    //  console.log('test')
    const out = getDirectory([]);
    expect(out).toBe(path.resolve(__dirname, '../'));
  });
});
