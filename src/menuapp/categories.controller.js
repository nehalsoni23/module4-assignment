(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['myCategories', '$rootScope'];
  function CategoriesController(myCategories, $rootScope) {

    var categoryList = this;
    categoryList.category = myCategories.data;
  };
})();
