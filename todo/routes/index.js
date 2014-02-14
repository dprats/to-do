
/*
 * GET home page.
 */

 var mongoose = require('mongoose');
 var Todo = mongoose.model('Todo');

exports.index = function(req, res){
		Todo.find( function (err, todos, count){
			res.render('index', {
				title: 'Express todo Example',
				todos: todos
			});
		});
};

exports.create = function(req, res){
	new Todo({
		content: req.body.content,
		updated_at: Date.now()
	}).save (function(err, todo, count){
		res.redirect('/');
	})
};