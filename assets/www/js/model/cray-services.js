

(function () {

 getAllByKey = function (key) {
 var data=null;
 if(localStorage.getItem(key) != null)
 {
 data=localStorage.getItem(key);
 }
 return data;
 },
 
 setData = function (key,data) {
 localStorage.setItem(key,JSON.stringify(data));
 },
 
 findByManager = function (managerId) {
 var results = employees.filter(function (element) {
                                return managerId === element.managerId;
                                });
 return results;
 };
 
 
 
 crayPlayApp.factory('crayService', [
                       function () {
                          
                          if(localStorage.getItem("WORDS") == null)
                          {
                          console.log("db init called") ;
                          var crayDB= new createDB();
                          crayDB.addWords();
                          crayDB.addDefinitions();
                          crayDB.addSetUPParam();
                          crayDB.addPlayers();
						  crayDB.addAnswers();
                          }
                          
                       return {
                          
                       query: function () {
                       return employees;
                       },
                       get: function (employee) {
                       return findById(parseInt(employee.employeeId));
                       }
                       }
                       
                       }])
 crayPlayApp.factory('wordsService', [
                                     function () {
                                     
                                     return {
                                     
                                     query: function () {
                                     return employees;
                                     },
                                     getAllWords: function () {
                                     return getAllByKey("WORDS");
                                     },
                                    getAllDefinitions:function()
                                      {
                                      return getAllByKey("DEFINITIONS");
                                      }
                                     }
                                     
                                     }])

 crayPlayApp.factory('playerService', [
                     function () {
                     return {
                     getAll: function () {
                            
                            return getAllByKey("PLAYERS");
                     //return findByManager(parseInt(employee.employeeId));
                     },
                            insertNewPlayer:function(newPlayer)
                            {
                            var allPlayers=JSON.parse(getAllByKey("PLAYERS"));
                            console.log(allPlayers);
                            allPlayers.push(newPlayer);
                                       setData("PLAYERS",allPlayers);
                            
                            
                            },
                            removePlayer:function(index)
                            {
                            var allPlayers=JSON.parse(getAllByKey("PLAYERS"));
                            allPlayers.splice(index,1);
                                       setData("PLAYERS",allPlayers);
                            return allPlayers;
                             
                            }
                     }
                     
                     }]);
					  crayPlayApp.factory('answerService', [
                     function () {
                     return {
                     getAll: function () {
                            
                            return getAllByKey("ANSWERS");
                     //return findByManager(parseInt(employee.employeeId));
                     },
                            insertAnswer:function(newAnswer)
                            {
                            var allAnswers=JSON.parse(getAllByKey("ANSWERS"));
                         
                            allAnswers.push(newAnswer);
                                       setData("ANSWERS",allAnswers);
                            
                            
                            }
                     }
                     
                     }]);
 
 }());