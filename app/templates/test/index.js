jest.unmock('../src/index');
import index from '../src/index';

describe('<%= name %> tests', () => {
  it('succeeds', () => {
    expect(index())
      .toBe(true);
  });
});
