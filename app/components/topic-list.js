import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  sortKey: 'label',

  sortedTopics: computed('topics.@each.{label,volume,sentimentScore}', 'sortKey', function() {
    const topics = this.topics.slice();

    return topics.sortBy(this.sortKey);
  }),

  actions: {
    sort(key) {
      this.set('sortKey', key);
    }
  }
});
