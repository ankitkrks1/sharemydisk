import getPort from './getPort';

describe('Testing getPort :: ', () => {
  it('Get IP Port when -p given ', () => {
    const out = getPort(['node', '-d', './', '-p', '80']);

    expect(out).toBe(80);
  });

  it('Get IP Port when port not given ', () => {
    const out = getPort(['node', '-d', './']);

    expect(out).toBe(3000);
  });
});
