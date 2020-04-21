module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			admin: {
				options: {
					sassDir: 'Resources/assets/admin/sass',
					cssDir: 'Resources/assets/admin/css',
					environment: 'production',
					relativeAssets: true
				}
			},
			public: {
				options: {
					sassDir: 'Resources/assets/public/sass',
					cssDir: 'Resources/assets/public/css',
					environment: 'production',
					relativeAssets: true
				}
			},
			adminDev: {
				options: {
					environment: 'development',
					debugInfo: true,
					noLineComments: false,
					sassDir: 'Resources/assets/admin/sass',
					cssDir: 'Resources/assets/admin/css',
					outputStyle: 'expanded',
					relativeAssets: true,
					sourcemap: true
				}
			},
			publicDev: {
				options: {
					environment: 'development',
					debugInfo: true,
					noLineComments: false,
					sassDir: 'Resources/assets/public/sass',
					cssDir: 'Resources/assets/public/css',
					outputStyle: 'expanded',
					relativeAssets: true,
					sourcemap: true
				}
			}
		},
		// check our JS
		jshint: {
			options: {
				'jshintrc': true
			},
			all: [
				'Resources/assets/public/js/src/*.js',
				'!Resources/assets/public/js/*.min.js',
				'Resources/assets/admin/js/src/*.js',
				'!Resources/assets/admin/js/*.min.js'
			]
		},
		// convert readme.txt to markdown
		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt'
				},
			},
			options: {
				screenshot_url: 'wporg-assets/{screenshot}.png',
			},
		},
		// concat and minify our JS
		uglify: {
			dev: {
				options: {
					beautify: true,
					mangle: false
				},
				files: {
					'Resources/assets/public/js/public.js': [
						/* add path to js dependencies (ie in node_modules) here */
						'node_modules/tippy.js/dist/tippy.all.js',
						'Resources/assets/public/js/src/*.js'
					],
					'Resources/assets/admin/js/admin.js': [
						/* add path to js dependencies (ie in node_modules) here */
						'Resources/assets/admin/js/src/*.js'
					]
				}
			},
			dist: {
				files: {
					'Resources/assets/public/js/public.min.js': [
						'Resources/assets/public/js/public.js'
					],
					'Resources/assets/admin/js/admin.min.js': [
						'Resources/assets/admin/js/admin.js'
					]
				}
			}
		},
		watch: {
			compass: {
				files: [
					'Resources/assets/admin/sass/**/*.scss',
					'Resources/assets/public/sass/**/*.scss'
				],
				tasks: [
					'compass:adminDev', 'compass:publicDev'
				]
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: [
					'uglify:dev'
				]
			}
		}
	});
	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-wp-readme-to-markdown');
	// Register tasks
	grunt.registerTask('default', [
		'compass:admin', 'compass:public'
	]);
	grunt.registerTask('dev', [
		'compass:admin',
		'compass:public',
		'jshint',
		'uglify:dev',
		'uglify:dist',
		'wp_readme_to_markdown',
		'watch'
	]);
	grunt.registerTask('readme', [
		'wp_readme_to_markdown'
	]);
	grunt.registerTask('dist', [
		'compass:admin',
		'compass:public',
		'jshint',
		'uglify:dev',
		'uglify:dist',
		'wp_readme_to_markdown'
	]);
};
