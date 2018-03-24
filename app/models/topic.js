import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  label: attr('string'),
  volume: attr('number'),
  type: attr('string'),
  sentiment: attr(),
  sentimentScore: attr('number'),
  burst: attr('number'),
  days: attr(),
  pageType: attr(),
  queries: attr(),
});
