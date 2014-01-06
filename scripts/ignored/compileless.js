#!/usr/bin/nodejs

var exec = require('child_process').exec;

var server = process.argv[2];
var path   = process.argv[3];
var files  = process.argv[4].split(',');

var lessc  = 'node_modules/less/bin/lessc';
//test if version match
exec(lessc + ' -v',
  function (error, stdout, stderr) {
    var version = stdout.match('[0-9\.]+')[0];
    if (version < '1.5.0') lessc = '/usr/local/lib/node_modules/less/bin/lessc';
console.log(version, lessc)
var env = process.argv[5];
if (!env) env = 'dev';
var params;
if (env == 'dev') {
  params = ' --line-numbers=all'
         + ' --source-map-rootpath=http://'+server;
} else {
  params = ' -x';
}

files.forEach(function(file){
  if (env == 'dev') params += ' --source-map='+path+'/'+file+'.css.map';
  exec( lessc + params + ' ' + path+'/less/'+file+'.less ' + path+'/'+file+'.css');
})

});
