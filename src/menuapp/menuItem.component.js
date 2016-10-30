(function(){
  'use strict';

  angular.module('MenuApp')
  .component('menuItem', {
    templateUrl : 'src/menuapp/templates/menuItem.component.template.html',
    bindings : {
      item : '<'
    }
  });
})();
