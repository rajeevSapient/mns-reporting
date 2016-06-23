app.directive('tableDir', function($http) {
  return {
   
    restrict: 'AE',
    transclude: true,
    scope: {
      dataFromTable:'=dataparam',

    },
    link: function(scope, element, attrs) {

    scope.$watch('dataFromTable', function() {
        dataFromTable=scope.dataFromTable;
    });
    },
    templateUrl: function(tElement, tAttrs) {
        if(tElement[0].id!==""){
            return tElement[0].id + '.html';
        }
    }
  };
});