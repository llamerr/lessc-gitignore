var exec = require('child_process').exec;
var path = process.argv[2];
var files = process.argv[3].split(',');
files.forEach(function(file){
	console.log('node_modules/less/bin/lessc --line-numbers=mediaquery '+path+'/less/'+file+'.less > '+path+'/'+file+'.css');
	exec('node_modules/less/bin/lessc --line-numbers=mediaquery '+path+'/less/'+file+'.less > '+path+'/'+file+'.css');
})

