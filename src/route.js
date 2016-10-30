(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url : '/',
      templateUrl : 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url : '/categories',
      templateUrl : 'src/menuapp/templates/categories.template.html',
      controller : 'CategoriesController as categories',
      resolve : {
        myCategories : ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url : '/menu_items/{shortName}',
      templateUrl : 'src/menuapp/templates/menuItem.template.html',
      controller : 'MenuItemController as menuItem',
      resolve : {
        myMenuItem : ['$stateParams', 'MenuDataService',
        function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
  }
})();
