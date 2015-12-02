'use strict';

// Configuring the Chat module
angular.module('debehaber').run(['Menus',
	function (Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'Debe/Haber',
			state: 'debehaber.app'
		});
	}
]);
