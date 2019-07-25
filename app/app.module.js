(function () {
    'use strict';

    /**
     * Main module
     */
    angular
        .module('myApp', [
        	'ui.router',
        	'ngAnimate',
        	'ui.bootstrap',
        	'LocalStorageModule',
        	'jcs-autoValidate',
        	'angularjs-dropdown-multiselect',
        	'ui.date',
        	'ngSidebarJS',
        	'angular.filter',
        	'hl.sticky',
        	'ui-notification',
        	'ui.sortable', 
        	'ui.sortable.multiselection',
        	'naif.base64',
			'ui.mask',
			'chart.js',
			'gantt',
			'gantt.table',
			'gantt.movable',
			'gantt.dependencies',
			'gantt.tree',
			'gantt.groups',
			'gantt.tooltips'
        ]);
})();
