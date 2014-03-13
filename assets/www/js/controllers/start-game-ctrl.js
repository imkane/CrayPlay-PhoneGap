
crayPlayApp.controller('StartGameCtrl', ['$scope', '$rootScope', 'wordsService','answerService', 'playerService',
                                         function StartGameCtrl($scope, $rootScope, wordsService,answerService, playerService) {
                                         
                                         $scope.words = JSON.parse(wordsService.getAllWords());
                                         
                                         $scope.players = JSON.parse(playerService.getAll());
                                         $scope.definitions = JSON.parse(wordsService.getAllDefinitions()).slice(0, 5);
                                         $scope.notes=JSON.parse(answerService.getAll());
                                         
                                         
                                         $scope.currentPlayer;
                                         $scope.nextPlayer;
                                         $scope.startNewGame = function () {
                                         queryNewWord();
                                         }
                                         $scope.selectedDefIndex=0;
                                         
                                         
                                         function queryNewWord() {
                                         var randomKey = 0;
                                         randomKey = Math.floor((Math.random() * 10) + 1);
                                         $rootScope.currentWord = $scope.words[randomKey];
                                         };
                                         
                                         if ($rootScope.round == 0) {
                                         $scope.startNewGame(); //start new game call
                                         $rootScope.round = 1;
                                         }
                                         
                                         $scope.updatePlayersTurns = function () {
                                         console.log($rootScope.playerTurnCount +'..'+$scope.players.length);
                                         if ($rootScope.playerTurnCount != $scope.players.length) {
                                         
                                         $scope.currentPlayer = $scope.players[$rootScope.playerTurnCount - 1].name;
                                         $scope.nextPlayer = $scope.players[$rootScope.playerTurnCount].name;
                                         $rootScope.playerTurnCount = $rootScope.playerTurnCount + 1;
                                         return true;
                                         }
                                         if ($rootScope.playerTurnCount > $scope.players.length)
                                         {return false;}
                                         else
                                         {
                                         $scope.currentPlayer = $scope.players[$rootScope.playerTurnCount - 1].name;
                                         $scope.nextPlayer = $scope.players[0].name;
                                         $rootScope.playerTurnCount = $rootScope.playerTurnCount + 1;
                                         }
                                         }
                                         $scope.updatePlayersTurns(); //update player call
                                         
                                         $scope.selectDefinition = function (index) {
                                         console.log("******clicked ***");
                                         for (var i = 0; i < $scope.definitions.length; i++) {
                                             $scope.definitions[i].selectedClass = 'radio-not-selected';
                                             }
                                             if(index != -1)
                                             {
                                             $scope.definitions[index].selectedClass = 'radio-selected';
                                             }
                                         $scope.selectedDefIndex=index;
                                         }
                                         $scope.selectDefinition(-1);
                                         
                                         $scope.goToNextPlayer = function () {
                                         $rootScope.playerTurnCount=$rootScope.playerTurnCount-1;
                                    
                                         answerService.insertAnswer($scope.definitions[$scope.selectedDefIndex]);
                                         $rootScope.go('/verifyDef');
                                         }
                                         $scope.goToSelectDefinition=function()
                                         {
                                         if($rootScope.playerTurnCount > $scope.players.length)
                                         {
                                         $rootScope.playerTurnCount=$rootScope.playerTurnCount-1;
                                         $rootScope.go('/rankAns');
                                         return false;
                                         }
                                         $rootScope.go('/selctDef');
                                         }
                                         
                                         
                                    
                                        
                                         
                                         
                                         }     ]);