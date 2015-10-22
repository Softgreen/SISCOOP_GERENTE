'use strict';

// Configuring the Chat module
angular.module('cajabancos').run(['Menus',
	function (Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'Caja y Bancos',
			state: 'cajabancos.app'
		});
	}
]);
