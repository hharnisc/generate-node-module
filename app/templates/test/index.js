import test from 'tape';
import index from '../src/index';

test('<%= name %> tests', (t) => {
  t.equal(index(), true, 'succeeds');
  t.end();
});
