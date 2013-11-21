var app = app || {};

(function () {
    'use strict';

    tbone.createView('TodoInput', function() {
        console.log('init view');

        var self = this;
        var input = self.$('input#new-todo');

        input.keypress(function(e) {
            if (e.which == ENTER_KEY) {
                var val = input.val();
                console.log('adding todo: ', val);

                var todo = app.Todo.make();
                todo.init(val);

                app.todos.add(todo);
                input.val('');
            }
        });
    });

})();
