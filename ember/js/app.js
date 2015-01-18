window.Todos = Ember.Application.create();

Todos.ApplicationSerializer = DS.IndexedDBSerializer.extend();
Todos.ApplicationAdapter = DS.IndexedDBAdapter.extend({
    databaseName: 'TodosList',
    version: 1,
    migrations: function() {
        this.addModel('todo');
    }
});

Todos.Router.map(function() {
  this.resource("todos", { path: '/'});
});


Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo'); // para obtenerlo de la base de datos
  }
});
