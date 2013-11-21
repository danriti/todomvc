var app = app || {};

(function () {
    'use strict';

    tbone.createView('TodoItem', function() {
        console.log('init item');

        var self = this;
        var id = $(self.el).data('id');
        var checkbox = self.$('input.toggle');
        var edit = self.$('input.edit');
        var destroy = self.$('button.destroy');
        var label = self.$('label');

        // Add basic support for completing a todo item.
        checkbox.click(function() {
            $(self.el).toggleClass("completed");
            app.todos.toggle('#' + id + '.checked');
        });

        // Destroy le todo item.
        destroy.click(function() {
            console.log('destroy: ', id);
            app.todos.remove(id);
        });

        // Enable editing on the todo item.
        label.dblclick(function() {
            console.log('edit!');
            $(self.el).toggleClass("editing");
        });

        // Complete the edit!
        edit.keypress(function(e) {
            if (e.which == ENTER_KEY) {
                var value = $(this).val();
                // Update the model 'title' property in the collection and
                // toggle off the class.
                app.todos('#' + id + '.title', value);
                $(self.el).toggleClass("editing");
            }
        });
    });

})();
