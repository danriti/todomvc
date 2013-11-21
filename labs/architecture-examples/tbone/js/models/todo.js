var app = app || {};

(function () {
    'use strict';

    app.Todo = tbone.models.base.extend({
        init: function(title) {
            this.query('id', T('todo.list.nextId'));
            this.query('title', title);
            this.query('checked', false);
        }
    });

})();
