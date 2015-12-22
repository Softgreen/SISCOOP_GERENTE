'use strict';

// Configuring the Chat module
angular.module('utilidad').run(['Menus',
	function (Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'Utilidad',
			state: 'utilidad.app'
		});
	}
]);
