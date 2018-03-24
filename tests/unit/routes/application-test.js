import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { startMirage } from 'word-cloud/initializers/ember-cli-mirage';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(() => {
    this.server = startMirage();
  });

  hooks.afterEach(() => {
    this.server.shutdown();
  });

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });

  test('it loads all topics', async function(assert) {
    let route = this.owner.lookup('route:application');
    let topics = await route.model();

    assert.equal(topics.length, 30);
  })
});
