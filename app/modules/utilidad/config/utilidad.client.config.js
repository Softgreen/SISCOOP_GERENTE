'use strict';

// Configuring the Chat module
angular.module('utilidad').run(['Menus',
	function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Utilidad',
      state: 'utilidad.app',
      type: 'uib-dropdown'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'utilidad.app', {
      title: 'Resumen',
      state: 'utilidad.app.reporte'
    });

    Menus.addSubMenuItem('topbar', 'utilidad.app', {
      title: 'Detallado',
      state: 'utilidad.app.reporteDetallado'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'utilidad.app', {
      title: 'Movimientos',
      state: 'utilidad.app.reporteMovimientos'
    });

	}
]);
