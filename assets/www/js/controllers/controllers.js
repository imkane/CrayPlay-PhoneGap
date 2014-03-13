crayPlayApp.controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
                                    function ($scope, $rootScope, $window, $location) {
                                    $scope.slide = '';
                                    $rootScope.back = function () {
                                    $scope.slide = 'slide-right';
                                    $window.history.back();
                                    }
                                    $rootScope.go = function (path) {
                                    $scope.slide = 'slide-left';
                                    $location.url(path);
                                    }
                                    //************iScroll common section
                                    
                                    var contentScroll;
                                    $rootScope.loaded = function () {
                                    console.log('iscroll initialize');
                                    contentScroll = new IScroll('#wrapper');
                                    }
                                    
                                    document.addEventListener('touchmove', function (e) {
                                                              e.preventDefault();
                                                              }, false);
                                    
                                    //===========
                                    
                                    //*****CURRENT GAME PARAMETER*****
                                    
                                    $rootScope.playerTurnCount = 1;
                                    $rootScope.round = 0;
                                    $rootScope.currentWord = null;
                                    $rootScope.answers=[];
                                    //=======
                                    }
                                    ]);
crayPlayApp.controller('TermsAndConditonCtrl', ['$scope', 'crayService',
                                                function ($scope, crayService) {
                                                
                                                $scope.isTerms = false;
                                                $scope.isTandC = function (isShow) {
                                                
                                                $scope.isTerms = !$scope.isTerms;
                                                
                                                $scope.$apply($scope.isTerms);
                                                }
                                                }
                                                ])
crayPlayApp.controller('RulesCtrl', ['$scope', '$routeParams',
                                     function ($scope, $routeParams) {
                                     
                                     }
                                     ])
crayPlayApp.controller('AddPlayerCtrl', ['$scope', '$rootScope', 'playerService',
                                         function ($scope, $rootScope, playerService) {
                                         $scope.players = JSON.parse(playerService.getAll());
                                         
                                         $scope.newPlayerName = '';
                                         $scope.playerValidate = true;
                                         
                                         $scope.isAddPlayer = false;
                                         $scope.switchAddPlayer = function () {
                                         $scope.playerValidate = true;
                                         $scope.isAddPlayer = !$scope.isAddPlayer;
                                         
                                         $scope.$apply($scope.isAddPlayer);
                                         }
                                         
                                         $scope.addMorePlayer = function () {
                                         if ($scope.newPlayerName == '') {
                                         return false;
                                         }
                                         console.log($scope.players[$scope.players.length - 1].p_id);
                                         var newpId = $scope.players[$scope.players.length - 1].p_id + 1;
                                         $scope.players.push({
                                                             'p_id': newpId,
                                                             name: $scope.newPlayerName
                                                             });
                                         $scope.$apply($scope.players);
                                         $scope.switchAddPlayer();
                                         
                                         playerService.insertNewPlayer({
                                                                       'p_id': newpId,
                                                                       name: $scope.newPlayerName
                                                                       });
                                         $scope.newPlayerName = '';
                                         
                                         }
                                         $scope.removePlayer = function (index) {
                                         $scope.players = playerService.removePlayer(index);
                                         // $scope.$apply($scope.players);
                                         
                                         }
                                         $scope.startPlay = function () {
                                         if ($scope.players.length > 2) {
                                         
                                         $rootScope.go('/startNewGame');
                                         } else {
                                         $scope.playerValidate = false;
                                         }
                                         }
                                         
                                         }
                                         ]);


crayPlayApp.directive('myNotebook', function () {
    return {
    restrict:"E",
    scope:{
    notes:'=',
    ondelete:'&'
    },
    templateUrl:"partials/start-game.html",
    controller:function ($scope, $attrs) {
    $scope.deleteNote = function (id) {
    $scope.ondelete({id:id});
    }
    }
    };
    })
crayPlayApp.directive('myNote', function () {
    return {
    restrict:'E',
    scope:{
    delete:'&',
    note:'='
    },
    link:function (scope, element, attrs) {
    var $el = $(element);
    
    $el.hide().fadeIn('slow');
    
    $('.thumbnails').sortable({
                              placeholder:"ui-state-highlight", forcePlaceholderSize:true
                              });
    }
    };
    })

