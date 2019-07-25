/**
 * Gulpfile setup
 * @link https://ahmadawais.com/my-advanced-gulp-workflow-for-wordpress-themes/
 */

// Project configuration
var project 		     = 'my-portifolio',           // Project name, used for build zip.
	url 			     = 'my-portifolio.dev',     // Local Development URL for BrowserSync. Change as-needed.
	url_subdir           = '/app/my-portifolio/',   // Url where the project runs
	paths = {
		dest_dir		 : '.',				     // Destination dir
		angular_dir		 : './app',				 // Angular app dir
		tmp_dir          : './.tmp',			 // Angular temporary dir
		node_modules_dir : './node_modules'
	};


// Load plugins
var gulp          = require('gulp'),
	debug         = require('gulp-debug'),
	notify        = require('gulp-notify'),
	util          = require('gulp-util'),

	//
	del 		  = require('del'),       		  // Helps with removing files and directories in our run tasks

	// JS and CSS
	concat        = require('gulp-concat'),
	minify        = require('gulp-minify'),
	assetVersion  = require('gulp-asset-version'),
	pixrem		  = require('gulp-pixrem'), 	  // Generates pixel fallbacks for rem units
	autoprefixer  = require('gulp-autoprefixer'), // Autoprefixing magic
	plumber       = require('gulp-plumber'),      // Helps prevent stream crashing on errors
	sourcemaps    = require('gulp-sourcemaps'),
	minifycss     = require('gulp-uglifycss'),
	stripcomments = require('gulp-strip-css-comments'),
	filter        = require('gulp-filter'),
	rename        = require('gulp-rename'),
	sass          = require('gulp-sass'),
	jshint        = require('gulp-jshint'),
	browser_sync  = require('browser-sync').create(),

	// AngularJS
	templateCache = require('gulp-angular-templatecache'),
	htmlmin       = require('gulp-htmlmin');

	// Images and Zip
	//imagemin      = require('gulp-imagemin'),
	//newer         = require('gulp-newer'),		// Helps to pass through newer files only
	//zip           = require('gulp-zip');          // Using to zip up our packaged theme into a tasty zip file that can be installed in WordPress!

// Timestamp for cache busting
var getStamp = function() {
	var myDate = new Date();

	var myYear = myDate.getFullYear().toString();
	var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
	var myDay = ('0' + myDate.getDate()).slice(-2);
	var mySeconds = myDate.getSeconds().toString();

	return myYear + myMonth + myDay;
};

/**
 * Styles
 * Looking at src/sass and compiling the files into Expanded format, Autoprefixing and sending the files to the build folder
 * Sass output styles: https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
 */
gulp.task('styles', function () {
	gulp.src('./sass/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded', // 'compressed', 'compact', 'nested', 'expanded'
			precision: 10
		}))
		.pipe(pixrem())
		.pipe(autoprefixer('last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(stripcomments({ preserve : /^# sourceMappingURL=/ })) // Strip comments from CSS - except for sourceMappingUrl
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(paths.dest_dir + '/css/'))
		.pipe(filter('**/*.css'))                // Filtering stream to only css files
		//.pipe(debug())						 // Debug Vinyl file streams to see what files are run through your Gulp pipeline
		.pipe(sourcemaps.init())
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		//.pipe(sourcemaps.write('./maps')) // maps for minified css?
		.pipe(gulp.dest(paths.dest_dir + '/css/'))
		.pipe(notify({ message: 'Styles task complete', onLast: true }))
});

/**
 * Load assets
 * Copy the json, fonts, js and styles from used libs to the correct public place
 */
gulp.task('load-assets', function() {
	gulp.src([
		paths.node_modules_dir + '/font-awesome/fonts/*',               // Font-Awesome Fonts
		paths.node_modules_dir + '/bootstrap-sass/assets/fonts/**'      // Bootstrap Fonts - We copy this, but by default we don't use it
	])
		.pipe(gulp.dest(paths.dest_dir + '/fonts'))
		.pipe(notify({ message: 'Load Fonts task complete', onLast: true }));

	gulp.src([
		paths.node_modules_dir + '/angular-auto-validate/dist/lang/*_pt-br.json'    // Language file for angular auto validate
	])
		.pipe(gulp.dest(paths.dest_dir + '/lang'))
		.pipe(notify({ message: 'Load Languages task complete', onLast: true }));
});


/**
 * Scripts
 * Look at /app/ files, concatenate and send to /js where we then minimize the concatenated file.
 */
gulp.task('scripts', function() {

	gulp.src([
		paths.node_modules_dir + '/jquery/dist/jquery.min.js',
		paths.node_modules_dir + '/jquery-ui-dist/jquery-ui.min.js',
		paths.node_modules_dir + '/chart.js/dist/Chart.js',
        paths.node_modules_dir + '/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.js',

		paths.node_modules_dir + '/bootstrap-sass/assets/javascripts/bootstrap.min.js',

		paths.node_modules_dir + '/moment/moment.js',

		paths.node_modules_dir + '/jsplumb/dist/js/jsplumb.min.js',

		paths.node_modules_dir + '/angular/angular.min.js',
		paths.node_modules_dir + '/angular-locale-pt-br/angular-locale_pt-br.js',
		paths.node_modules_dir + '/angular-ui-router/release/angular-ui-router.min.js',
		paths.node_modules_dir + '/angular-animate/angular-animate.min.js',
		paths.node_modules_dir + '/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
		paths.node_modules_dir + '/angular-local-storage/dist/angular-local-storage.min.js',
		paths.node_modules_dir + '/angular-sticky-plugin/dist/angular-sticky.min.js',
		paths.node_modules_dir + '/angular-ui-mask/dist/mask.min.js',
		paths.node_modules_dir + '/angular-sidebarjs/dist/angular-sidebarjs.min.js',
		paths.node_modules_dir + '/angular-chart.js/dist/angular-chart.js',
		paths.node_modules_dir + '/angular-auto-validate/dist/jcs-auto-validate.min.js',
		paths.node_modules_dir + '/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min.js',
		paths.node_modules_dir + '/angular-ui-date/dist/date.js',
		paths.node_modules_dir + '/angular-filter/dist/angular-filter.min.js',
		paths.node_modules_dir + '/angular-ui-notification/dist/angular-ui-notification.min.js',
		paths.node_modules_dir + '/angular-ui-sortable/dist/sortable.min.js',
		paths.node_modules_dir + '/angular-ui-sortable-multiselection/src/ui.sortable.multiselection.js',
		paths.node_modules_dir + '/angular-base64-upload/dist/angular-base64-upload.min.js',
		paths.node_modules_dir + '/angular-google-chart/ng-google-chart.min.js',
		paths.node_modules_dir + '/angular-moment/angular-moment.min.js',
		paths.node_modules_dir + '/angular-ui-tree/dist/angular-ui-tree.js',
		paths.node_modules_dir + '/angular-gantt/assets/angular-gantt.js',
		paths.node_modules_dir + '/angular-gantt/assets/angular-gantt-plugins.js',
		paths.node_modules_dir + '/bootstrap-fileinput/js/fileinput.min.js',
		paths.node_modules_dir + '/bootstrap-fileinput/js/locales/pt-BR.js',

		paths.angular_dir + '/app.module.js',
		paths.angular_dir + '/app.constant.js',
		paths.angular_dir + '/app.config.js',
		paths.angular_dir + '/app.route.js',
		paths.angular_dir + '/app.run.js',
		paths.angular_dir + '/app.filter.js',

		paths.angular_dir + '/app.controller.js',
		paths.angular_dir + '/layout/footer/footer.controller.js',
		paths.angular_dir + '/layout/toolbar/toolbar.controller.js',
		paths.angular_dir + '/layout/content/content.controller.js',
		paths.angular_dir + '/layout/navigation/navigation.controller.js',

		paths.angular_dir + '/directive/*.directive.js',
		paths.angular_dir + '/interceptor/*.interceptor.js',
		paths.angular_dir + '/service/*.service.js',
		paths.angular_dir + '/prototype/*.prototype.js',

		//paths.angular_dir + '/auth/auth.run.js',
		//paths.angular_dir + '/auth/login.controller.js',
		//paths.angular_dir + '/auth/logout.controller.js',
		//paths.angular_dir + '/home/home.controller.js',
		//paths.angular_dir + '/notificacoes/notificacoes.controller.js',
		//paths.angular_dir + '/modal-confirm/modal-confirm.controller.js',
		//paths.angular_dir + '/modal-confirm/confirm.service.js'
	])
		.pipe(sourcemaps.init())
		//.pipe(debug())						 // Debug Vinyl file streams to see what files are run through your Gulp pipeline
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(paths.dest_dir + '/js/'))
		.pipe(filter('**/*.js'))                // Filtering stream to only js files
        .pipe(minify({
            ext:{ //specifies output src and minified file extensions.
                src:'.js', //The suffix string of the filenames that output source files ends with.
                min:'.min.js' //The suffix string of the filenames that output minified files ends with.
            }
        }))
		.on('error', function (err) { util.log( util.colors.red('[Error]'), err.toString() ); })
		.pipe(gulp.dest(paths.dest_dir + '/js/'))
		.pipe(notify({ message: 'Scripts task complete', onLast: true }));
});

/**
 * Asset versioning
 * Add version after file's name by content hash
 */
gulp.task('asset-version', function() {
	gulp.src('./index.tmpl', { base: './' })
		//.pipe(debug())						 // Debug Vinyl file streams to see what files are run through your Gulp pipeline
    	.pipe(assetVersion())
    	.pipe(rename({
			basename: 'index',
			extname: '.html'
		}))
    	.pipe(gulp.dest(paths.dest_dir + '/'))
		.pipe(notify({ message: 'Assets Versioning task complete', onLast: true }));
});

/**
 * jshint
 * runs jshint
 */
gulp.task('jshint', function() {
    gulp.src(paths.angular_dir + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'JS Hint task complete', onLast: true }));
});

// ==== TASKS ==== //

/**
 * Gulp Default Task
 * Compiles styles, fires-up browser sync, watches js and html files.
 */

// Default Task
gulp.task('default', ['load-assets', 'styles', 'scripts', 'jshint', 'asset-version', 'clean'], function () {

});

// Clean generated files
gulp.task('clean', function() {
	return del([
		paths.dest_dir + '/css/**',
		paths.dest_dir + '/js/**'
	 ]);
});

/**
 * Browser Sync
 * Creates a small server that runs our project
 */
gulp.task('browser-sync', function() {
	browser_sync.init({
		port: 3000,
        server: {
            baseDir: './'
        }
    });
});

// Watch Task
gulp.task('watch', ['browser-sync', 'default'], function () {
	gulp.watch('./sass/**/*.scss', ['styles', 'asset-version']);
	gulp.watch( paths.angular_dir + '/**/*.js', ['scripts', 'jshint', 'asset-version']);
	gulp.watch('./**/*.html').on('change', browser_sync.reload);
});
