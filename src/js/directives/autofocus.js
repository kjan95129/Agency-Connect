
angular
.module('RDash')
.directive('autoFocus', autoLoad);


function autoLoad(){
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            _element[0].focus();
        }
    };
};