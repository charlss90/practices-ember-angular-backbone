"use strict";

var Todo = Backbone.Model.extend({

	title: null,

	done: false,

	toggleDone: function () {
		this.done = !this.done;
		return this.done;
	},

	initialize: function () {
	}

});


var TodoList = Backbone.Collection.extend({

	model: Todo

});


var TodoView = Backbone.View.extend({

	events: {
		"keypress .new-todo": "addTodo",
		"click .toggle": "toggleDone"
	},
	
	// TODO: por hacer
	toggleDone: function (e) {
	},

	addTodo: function(e) {
		if(e.keyCode == 13 && this.input.val()) {
			this.todos.create({
				title: this.input.val()
			});
		}
	},

	initialize: function () {
		this.todos = new TodoList();
		var el = $("#todo-view").html();
		this.template = _.template(el);
		this.render();
		this.todos.on("add", this.render, this);
	},

	render: function () {
		this.$el.html(this.template({
			todos: this.todos
		}));
		this.input = this.$el.find(".new-todo");
		return this;
	}
});

var Workspace = Backbone.Router.extend({
	routes: {
		"": "home"
	},

	home: function () {
		var homeView = new TodoView();
		$('main').append(homeView.$el);
	}
});

var main = function () {
	var router = new Workspace();
	Backbone.history.start();
};


$(document).ready(main);


