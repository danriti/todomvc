(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
    var app = {};

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

    // Instances
    tbone('touch', 1);
    tbone('todos', []);

    T(function() {
        var touch = tbone.query('touch');
        tbone.push('todos', app.Todo.make({title: touch}));
    });

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
