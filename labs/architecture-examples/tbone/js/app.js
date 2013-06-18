(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
    var app = {};
    var ENTER_KEY = 13;

    // Models
    app.Foo = tbone.models.base.extend({
        state: function() {
            return {bar: 'Hello world!',
                    lol: 'Templates work!'};
        }
    });

    app.Todo = tbone.models.base.extend({
        state: function() {
            return {
                title: this.title,
                checked: false
            }
        }
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
                tbone.push('todos', app.Todo.make({title: val}));
                input.val('');
            }
        });
    });

    // Instances
    tbone('todos', []);

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
