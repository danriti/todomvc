var app = app || {};

(function () {
    'use strict';

    var Todos = tbone.collections.localStorage.extend({
        model: app.Todo,
        key: 'todos'
    });

    // Create our global collection of todos.
    app.todos = Todos.make();
    tbone('todos', app.todos);

})();
