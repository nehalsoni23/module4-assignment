(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('MenuItemController', MenuItemController);

  MenuItemController.$inject = ['myMenuItem'];
  function MenuItemController(myMenuItem) {
    
     var menuItems = this;
     menuItems.menuItems = myMenuItem.data;
  }
})();
