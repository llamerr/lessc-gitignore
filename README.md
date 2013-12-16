lessc-gitignore
===============

lessc + nodemon + package.json + scripts setup, etc...

#Installation
do `git clone git@github.com:llamerr/lessc-gitignore.git`
after this to `./install /path/to/project/with/git`
now you can remove `lessc-gitignore` folder and switch to your project's folder

#Usage
supposed path for less files is in `less` directory, compiled files are put into parent dir

`scripts/ignored/compileless-nodemon static/css somelessfile,css-main`

following files will be monitored
`static/css/less/somelessfile.less` > `static/css/somelessfile.css`
`static/css/less/css-main.less` > `static/css/css-main.css`