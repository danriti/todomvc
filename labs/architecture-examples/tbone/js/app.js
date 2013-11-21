var app = app || {};
var ENTER_KEY = 13;

(function() {
    'use strict';

    // Not really sure where this goes just yet...
    tbone('todo.list', function() {
        var todos = tbone('todos') || [];
        var list = _.values(todos);
        var ids = _.map(todos, function (todo) { return todo.id; });
        return {
            items: _.map(todos, function(todo) { return _.clone(todo); }),
            activeCount: _.filter(todos, function(todo) { return !todo.checked }).length,
            completedCount: _.filter(todos, function(todo) { return todo.checked }).length,
            nextId: (ids.length ? _.max(ids) : 0) + 1
        }
    });

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
