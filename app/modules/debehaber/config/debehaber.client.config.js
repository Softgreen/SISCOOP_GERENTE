'use strict';

// Configuring the Chat module
angular.module('debehaber').run(['Menus',
	function (Menus) {
		// Set top bar menu items
		/*Menus.addMenuItem('topbar', {
			title: 'Debe/Haber',
			state: 'debehaber.app'
		});*/

    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Debe/Haber',
      state: 'debehaber.app',
      type: 'uib-dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'debehaber.app', {
      title: 'Resumen',
      state: 'debehaber.app.reporte'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'debehaber.app', {
      title: 'Detallado',
      state: 'debehaber.app.reporteDetallado'
    });
	}
]);
