/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $css) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.currSearchCriteria = {
        name: "",
        policy: ""
    };

    var defaultSearchCriteria = angular.copy($scope.currSearchCriteria);

    $scope.options = [
        {
            type: 'Billing Inquiries',
            text: 'Generate a report for billing inquiries',
            button_text: 'Generate Report!'
        },
        {
            type: 'Endorsements',
            text: 'Generate a report for Endorsements',
            button_text: 'Endorse policy!'
        },
        {
            type: 'Loss Runs',
            text: 'Generate a report for Loss Runs',
            button_text: 'Generate Loss Run!'
        },
        {
            type: 'EDocs',
            text: 'This is the info on EDocs',
            button_text: 'Generate EDoc!'
        },
        {
            type: 'Dashboard',
            button_text: 'Generate PDF!'
        },
        {
            type: 'Tables',
            button_text: 'Generate PDF!'
        }
    ];

    $scope.selectedOption = $scope.options[4];

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

    $scope.resetForm = function(user, userForm){
        user.policyNumber = null;
        user.name = null;
        userForm.$setPristine();
        userForm.$setUntouched();
    };

    window.onresize = function() {
        $scope.$apply();
    };
}