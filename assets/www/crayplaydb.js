function populateDB(tx){
     //DROP OLD TABLES
     tx.executeSql('DROP TABLE IF EXISTS QUESTIONS');
     tx.executeSql('DROP TABLE IF EXISTS WORDS');
	 tx.executeSql('DROP TABLE IF EXISTS PLAYERS');
	 tx.executeSql('DROP TABLE IF EXISTS GAMELOG');
	 tx.executeSql('DROP TABLE IF EXISTS GAMETRANLOG');
	 tx.executeSql('DROP TABLE IF EXISTS PLAYERANSWERS');
	 tx.executeSql('DROP TABLE IF EXISTS DEFINITIONS');
	 tx.executeSql('DROP TABLE IF EXISTS SETUPPARAMS');
	 	 
	 //CREATE TABLES
     tx.executeSql('CREATE TABLE IF NOT EXISTS WORDS (word_id INTEGER PRIMARY KEY UNIQUE, word_type INTEGER, word_text TEXT, word_realdef TEXT)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS PLAYERS (p_id INTEGER PRIMARY KEY AUTOINCREMENT, p_name TEXT)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS GAMELOG (g_id INTEGER PRIMARY KEY AUTOINCREMENT, p_winner INTEGER, played_date DATE)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS GAMETRANLOG (gt_id INTEGER PRIMARY KEY AUTOINCREMENT, g_id INTEGER, p_id INTEGER, def_id INTEGER, def_used_ind INTEGER)');
   	 tx.executeSql('CREATE TABLE IF NOT EXISTS PLAYERANSWERS (pa_id INTEGER PRIMARY KEY AUTOINCREMENT, g_id INTEGER, p_id INTEGER, word_id, round_id INTEGER, def_id INTEGER, a_vote_count INTEGER, a_rank INTEGER)');
   	 tx.executeSql('CREATE TABLE IF NOT EXISTS DEFINITIONS (def_id INTEGER KEY UNIQUE, def_type INTEGER, def_text TEXT)');
   	 tx.executeSql('CREATE TABLE IF NOT EXISTS SETUPPARAMS (setup_id INTEGER KEY UNIQUE, setup_text TEXT, setup_value TEXT)');
   	 
   	 //CREATE WORDS
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (1, 1, "Nipple", "The small projection of a woman\'s or girl\'s breasts in which the mammary ducts terminate and from which milk can be secreted")');
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (2, 1, "Word 2", "Word Definition 2")');
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (3, 1, "Word 3", "Word Definition 3")'); 
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (4, 1, "Word 4", "Word Definition 4")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (5, 1, "Word 5", "Word Definition 5")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (6, 1, "Word 6", "Word Definition 6")');
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (7, 1, "Word 7", "Word Definition 7")'); 
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (8, 1, "Word 8", "Word Definition 8")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (9, 1, "Word 9", "Word Definition 9")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (10, 1, "Word 10", "Word Definition 10")');	 
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (11, 1, "Word 11", "Word Definition 11")');	
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (12, 1, "Word 12", "Word Definition 12")');
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (13, 1, "Word 13", "Word Definition 13")'); 
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (14, 1, "Word 14", "Word Definition 14")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (15, 1, "Word 15", "Word Definition 15")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (16, 1, "Word 16", "Word Definition 16")');
   	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (17, 1, "Word 17", "Word Definition 17")'); 
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (18, 1, "Word 18", "Word Definition 18")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (19, 1, "Word 19", "Word Definition 19")');
	 tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (20, 1, "Word 20", "Word Definition 20")');	
	 
	 //CREATE DEFINTIONS
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (1, 1, "Definition 1")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (2, 1, "Definition 2")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (3, 1, "Definition 3")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (4, 1, "Definition 4")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (5, 1, "Definition 5")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (6, 1, "Definition 6")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (7, 1, "Definition 7")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (8, 1, "Definition 8")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (9, 1, "Definition 9")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (10, 1, "Definition 10")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (11, 1, "Definition 11")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (12, 1, "Definition 12")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (13, 1, "Definition 13")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (14, 1, "Definition 14")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (15, 1, "Definition 15")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (16, 1, "Definition 16")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (17, 1, "Definition 17")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (18, 1, "Definition 18")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (19, 1, "Definition 19")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (20, 1, "Definition 20")');	 	 
	        	 
	 //CREATE SETUP PARAMETERS       	 
   	 tx.executeSql('INSERT INTO SETUPPARAMS (setup_id, setup_text, setup_value) VALUES (1, "handsize", "5")');
   	 tx.executeSql('INSERT INTO SETUPPARAMS (setup_id, setup_text, setup_value) VALUES (2, "numrounds", "5")');
}

function initializeDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "Test CrayPlay DB", 1000000);
	db.transaction(populateDB, errorCallBack, successCallBack);
}


function errorCB(err) {
	alert("Error processing SQL: "+err.code);
}

function successCB() {
	//alert("success!");
}

function deletePlayersDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(deletePlayersDBCall, errorCallBack, successCallBack);
    currentAllPlayers.forEach(
    function(p_id, p_name)
    {
    	currentAllPlayers.remove(p_id);
    }
    );
}   
function deletePlayersDBCall(tx){
	tx.executeSql('DELETE FROM PLAYERS');
}

function addPlayersDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(addPlayersDBCall, errorCallBack, addPlayersDBSuccess);
}
function addPlayersDBCall(tx){
	var setPlayerName="";
	//alert(numPlayers);
	for(var i = 0; i < numPlayers; i++)
	{
		setPlayerName = document.getElementById("player"+(i+1)+"name").value;
    	tx.executeSql('INSERT INTO PLAYERS(p_name) VALUES (?)', [setPlayerName], successCB, errorCB);
    }
}	
function addPlayersDBSuccess(){
  	//alert('inside add player success db');
  	getPlayersDB(errorCB,selectCurrentPlayer); //Get the list of all players entered into the database
}

function getPlayersDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(getPlayersDBCall, errorCallBack, successCallBack);
}
function getPlayersDBCall(tx){
    tx.executeSql('SELECT p_id, p_name from PLAYERS', [], getDBPlayersDBSuccess, errorCB);
}	
function getDBPlayersDBSuccess(tx, results) {
    //alert("inside queryDBPlayersDBSuccess");
    for(var i=0; i<results.rows.length;i++){
		currentAllPlayers.add(results.rows.item(i).p_id, results.rows.item(i).p_name);
    }
    numPlayers = currentAllPlayers.count;
}
function selectCurrentPlayer(){
    currentReader = currentAllPlayers.grabFirstPlayer().p_id;
    currentReaderName = currentAllPlayers.grabFirstPlayer().p_name;
    currentRoundPlayers.resetPlayers(currentReader);
    	
    currentPlayer = currentRoundPlayers.grabNextPlayer().p_id;
    currentPlayerName = currentRoundPlayers.grabNextPlayer().p_name;
}

function queryDBQuestions(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(queryDBQuestionsCall, errorCallBack, successCallBack);
}	
function queryDBQuestionsCall(tx) {
	tx.executeSql('SELECT word_id, word_type, word_text, word_realdef FROM WORDS', [], queryDBQuestionsSuccess, errorCB);
}
function queryDBQuestionsSuccess(tx, results) {

    for(var i=0; i<results.rows.length;i++){
    	myWords.add(results.rows.item(i).word_id, results.rows.item(i).word_type, results.rows.item(i).word_text, results.rows.item(i).word_realdef, false);
    }
}

function createNewGameDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(createNewGameDBCall, errorCallBack, successCallBack);
}
function createNewGameDBCall(tx){
	tx.executeSql('INSERT INTO GAMELOG(p_winner, played_date) values (null, "now")', [], createNewGameDBSuccess, errorCB);
}
function createNewGameDBSuccess(tx, results){
	//alert("created game successfully");
	queryNewGameDB(errorCB,successCB);
}

function queryNewGameDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(queryNewGameDBCall, errorCallBack, successCallBack);
}
function queryNewGameDBCall(tx){
	tx.executeSql('SELECT max(g_id) as g_id from GAMELOG LIMIT 1', [], queryNewGameDBCallSuccess, errorCB);
}
function queryNewGameDBCallSuccess(tx, results){
	//alert("created game successfully");
	currentGameID = results.rows.item(0).g_id;
}
