export default function() {
  // this.timing = 3000;
  this.namespace = 'api';

  this.get('/topics', (schema) => {
    return schema.topics.all();
  });

  this.get('/topics/:id', (schema, request) => {
    var id = request.params.id;

    return schema.topics.find(id);
  })
}
