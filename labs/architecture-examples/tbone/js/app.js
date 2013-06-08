(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!

    // Models
    tbone.models.Foo = tbone.models.base.extend({
        state: function() {
            return {bar: 'Hello world!'};
        }
    });

    // Instances
    tbone('foo', tbone.models.Foo.make());

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
