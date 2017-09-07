/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.options = [{
        type: 'Billing Inquiries',
        text: 'This is the info on billing inquiries'
    },
    {
        type: 'Endorsements',
        text: 'This is the info on Endorsements'
    },
    {
        type: 'EDocs',
        text: 'This is the info on EDocs'
    },
    {
        type: 'Another One',
        text: 'Secret poop'
    }
    ];

    $scope.selectedOption = $scope.options[0];

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    $scope.confirmationModal = function(){
        swal(
            'Success!',
            'Report Generated',
            'success'
        )
    };

    window.onresize = function() {
        $scope.$apply();
    };
}