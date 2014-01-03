var exec = require('child_process').exec;
var path = process.argv[2];
var files = process.argv[3].split(',');
var env = process.argv[4];
if (!env) env = 'dev';
files.forEach(function(file){
	if (env == 'dev')
		exec('node_modules/less/bin/lessc --line-numbers=mediaquery '+path+'/less/'+file+'.less > '+path+'/'+file+'.css');
	else
		exec('node_modules/less/bin/lessc -x '+path+'/less/'+file+'.less > '+path+'/'+file+'.css');

})
