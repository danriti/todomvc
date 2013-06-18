(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!
    var todo = {};

    // Models
    todo.Foo = tbone.models.base.extend({
        state: function() {
            return {bar: 'Hello world!',
                    lol: 'Templates work!'};
        }
    });

    // Instances
    tbone('foo', todo.Foo.make());

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
