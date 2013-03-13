var request = require('request');
, 	util    = require('util');
,	_       = require('underscore');

function Queue(token, projectId, queue){
	this.options = {
		url: 'http://mq-aws-us-east-1.iron.io/1/projects/' + projectId + '/queues/' + queue + '/messages',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'OAuth ' + token
		},
		body: '{"messages":[{"body":"hello world!"}]}'
	}
	
}

Queue.prototype.post = function(message){
	var options = this.options;
	options.method = 'POST';
	if(message){
		options.body = '{"messages":[{"body":"' + message + '"}]}';
	}
	request(this.options, function(error, response, body){
		console.log(body);
	});
}
Queue.prototype.get = function(){
	var options = this.options;
	options.method = 'GET';

	request(this.options, function(error, response, body){
		console.log(response, body);
	});

}