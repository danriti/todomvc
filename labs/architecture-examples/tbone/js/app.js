(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
    var app = {};
    var ENTER_KEY = 13;
    var ID = 0;

    // Models
    app.Foo = tbone.models.base.extend({
        state: function() {
            return {bar: 'Hello world!',
                    lol: 'Templates work!'};
        }
    });

    app.Todo = tbone.models.base.extend({
        init: function(title) {
            this.query('id', ID++);
            this.query('title', title);
            this.query('checked', false);
        }
    });

    app.Todos = tbone.collections.base.extend({
        model: app.Todo
    });

    // Views
    tbone.createView('todoInput', function() {
        console.log('init view');

        var self = this;
        var input = self.$('input#new-todo');

        input.keypress(function(e) {
            if (e.which == ENTER_KEY) {
                var val = input.val();
                console.log('adding todo: ', val);

                var todo = app.Todo.make();
                todo.init(val);

                todos.push(todo);
                input.val('');
            }
        });
    });

    tbone.createView('todoItem', function() {
        console.log('init item');

        var self = this;
        var checkbox = self.$('input.toggle');

        // Add basic support for completing a todo item.
        checkbox.click(function() {
            $(self.el).toggleClass("completed");
        });
    });

    // Instances
    var todos = app.Todos.make();
    tbone('todos', todos);

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
