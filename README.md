改造自 yeoman-angular 

  * 增加 RequireJS 支持,因 RequireJS 用于多页面开发时，需要dir以及modules配置，但是 usemin 仍然会自动给requirejs任务添加name属性和out属性，从而导致配置冲突。顾认同去掉，如是但页面 则requireJs任务如下配置：
  	<code>
		requirejs: {
          dist: {
              // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
              options: {
                  // `name` and `out` is set by grunt-usemin
                  baseUrl: yeomanConfig.app + '/scripts',
                  mainConfigFile:'<%= yeoman.app %>/scripts/config.js',              
                  optimize: 'none',
                  // TODO: Figure out how to make sourcemaps work with grunt-usemin
                  // https://github.com/yeoman/grunt-usemin/issues/30
                  //generateSourceMaps: true,
                  // required to support SourceMaps
                  // http://requirejs.org/docs/errors.html#sourcemapcomments
                  preserveLicenseComments: false,
                  useStrict: true,
                  wrap: true
                  //uglify2: {} // https://github.com/mishoo/UglifyJS2
              }
          }
      },
  	</code> 