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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus vitae enim scelerisque luctus. Mauris purus est, sagittis ut risus et, mollis commodo urna. Integer gravida ante massa, sed gravida est lacinia quis. Praesent id sapien auctor, cursus nisl at, mollis felis. In facilisis dictum tortor, ut porttitor risus elementum in.',
            button_text: 'Generate Report!'
        },
        {
            type: 'Endorsements',
            text: 'Etiam hendrerit justo eget quam suscipit, vel finibus urna rutrum. Etiam bibendum, est vel faucibus consequat, velit sapien eleifend lectus, sed tempor leo nisl quis enim. Aenean commodo urna eu nisi finibus laoreet. Suspendisse nec justo ultricies, dapibus neque nec, tempor sem.',
            button_text: 'Endorse policy!'
        },
        {
            type: 'Loss Runs',
            text: 'Aenean convallis faucibus urna, luctus pharetra dolor porttitor eu. Pellentesque a bibendum arcu. Etiam auctor ipsum in posuere tincidunt.',
            button_text: 'Generate Loss Run!'
        },
        {
            type: 'EDocs',
            text: 'Quisque non nunc id felis eleifend porttitor eget in ligula. Vestibulum est nibh, gravida vitae tortor ut, porttitor sodales massa. Vivamus arcu turpis, facilisis efficitur nibh at, mollis tempus ipsum. Quisque rhoncus eros a lacinia pharetra. Etiam porttitor in nisi sed pharetra. Nulla facilisi.',
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