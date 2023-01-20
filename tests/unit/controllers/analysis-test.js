import { module, test } from 'qunit';
import { setupTest } from 'practice-demo/tests/helpers';

module('Unit | Controller | analysis', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:analysis');
    assert.ok(controller);
  });
});
