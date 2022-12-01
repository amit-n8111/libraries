module.exports = function (grunt) {
	var projectName = grunt.option('projectName') || 'showcase';

	grunt.loadNpmTasks('grunt-war');
	grunt.loadNpmTasks('grunt-run');

	// Project configuration.
	grunt.initConfig({
		run: {
			ni: {
				exec: 'npm install'
			},
			build: {
				exec: 'npm run build ' + projectName
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		war: {
			target: {
				options: {
					war_dist_folder: 'dist/' /* Folder where to generate the WAR. */,
					war_name: 'libraries.war' /* The name fo the WAR file (.war will be the extension) */
				},
				files: [
					{
						expand: true,
						cwd: 'dist/' + projectName,
						src: ['**'],
						dest: ''
					}
				]
			}
		}
	});

	grunt.registerTask('deploy', ['run:build']);
};
