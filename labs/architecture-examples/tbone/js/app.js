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

    // Magic to make template scripts work! Need to work with Tillberg to get
    // this somewhat formalized. What are we going to do with this?
    $('script[type="text/template"]').each(function() {
        var $this = $(this);
        var html = $this.html();
        var name = $this.data('name');
        tbone.addTemplate(name, html);
    });

    // Let's rock!
    tbone.render(jQuery('[tbone]'));

})( window );
