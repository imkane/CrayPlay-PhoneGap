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
	tx.executeSql('CREATE TABLE IF NOT EXISTS PLAYERANSWERS (pa_id INTEGER PRIMARY KEY AUTOINCREMENT, g_id INTEGER, p_id INTEGER, word_id INTEGER, round_id INTEGER, def_id INTEGER, a_vote_count INTEGER, a_rank INTEGER)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS DEFINITIONS (def_id INTEGER KEY UNIQUE, def_type INTEGER, def_text TEXT)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS SETUPPARAMS (setup_id INTEGER KEY UNIQUE, setup_text TEXT, setup_value TEXT)');
   	 
   	 //CREATE WORDS
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (1,1,"Nerd","A foolish or contemptible person who lacks social skills or is boringly studious.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (2,1,"Geek","An unfashionable or socially inept person.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (3,1,"Dork","A contemptible, socially inept person.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (4,1,"Salamander","A newt-like amphibian that typically has bright markings, once thought able to endure fire.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (5,1,"The Big Bang","The rapid expansion of matter from a state of extremely high density and temperature which according to current cosmological theories marked the origin of the universe.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (6,1,"The Economy","The state of a country or region in terms of the production and consumption of goods and services and the supply of money.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (7,1,"The Deficit","The amount by which something, especially a sum of money, is too small.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (8,1,"Swallow","Cause or allow (something, especially food or drink) to pass down the throat.")');
	tx.executeSql('INSERT INTO WORDS (word_id, word_type, word_text, word_realdef) VALUES (9,1,"Vacuum","A space entirely devoid of matter.")');
	 /*
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
	 */
	 
	 //CREATE DEFINTIONS
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (1,1,"The softest, squishiest, warmest, most perfect thing imaginable")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (2,1,"A redneck robot")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (3,1,"The inverse of a muffin top")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (4,1,"The act of stealing from a disabled person")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (5,1,"A female hippopotamus")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (6,1,"Justin Bieber\'s left testicle")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (7,1,"The mold growing on the underside of a neglected sponge")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (8,1,"Crying while having sex")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (9,1,"The \'no\' feeling")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (10,1,"A popular internet meme")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (11,1,"The most popular animal on the farm")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (12,1,"An annoying song that\'s stuck in your head, forever")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (13,1,"The moment you realize your child is a doucebag")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (14,1,"Female morning wood")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (15,1,"A turtle\'s erect member")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (16,1,"Better than winning the lottery")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (17,1,"Teaching an aardvark how to do The Polka")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (18,1,"Having your asshole licked by an anteater")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (19,1,"aggressively humping a stranger\'s leg")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (20,1,"cheese-cupping your grandma")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (21,1,"spit taking into a midget\'s face")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (22,1,"diarrhea motorboat")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (23,1,"the sweat underneath a 93-year old woman\'s breasts")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (24,1,"when your balls stick to your thighs")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (25,1,"queefing back and forth, forever")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (26,1,"the most hip hipster")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (27,1,"an itch inside your chest cavity")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (28,1,"Super herpes")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (29,1,"starting a moshpit at a folk festival")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (30,1,"rocking out with your cock out, literally")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (31,1,"jamming out with your clam out, literally")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (32,1,"recreating The Human Centipede with your neighbor\'s cats")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (33,1,"waking up with a used tampon in your mouth")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (34,1,"farting really loud at the library and yelling \'nailed it!!")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (35,1,"Grandpa\'s smegma")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (36,1,"the smell of 1000 fiery poops")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (37,1,"sucking on a frozen hotdog")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (38,1,"waking up next to a dead hooker")');
	tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (39,1,"wearing only a belt on a nude beach")');
	 /*
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
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (21, 1, "Definition 21")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (22, 1, "Definition 22")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (23, 1, "Definition 23")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (24, 1, "Definition 24")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (25, 1, "Definition 25")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (26, 1, "Definition 26")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (27, 1, "Definition 27")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (28, 1, "Definition 28")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (29, 1, "Definition 29")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (30, 1, "Definition 30")');	 
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (31, 1, "Definition 31")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (32, 1, "Definition 32")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (33, 1, "Definition 33")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (34, 1, "Definition 34")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (35, 1, "Definition 35")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (36, 1, "Definition 36")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (37, 1, "Definition 37")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (38, 1, "Definition 38")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (39, 1, "Definition 39")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (40, 1, "Definition 40")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (41, 1, "Definition 41")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (42, 1, "Definition 42")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (43, 1, "Definition 43")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (44, 1, "Definition 44")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (45, 1, "Definition 45")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (46, 1, "Definition 46")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (47, 1, "Definition 47")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (48, 1, "Definition 48")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (49, 1, "Definition 49")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (50, 1, "Definition 50")');	 	 
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (51, 1, "Definition 51")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (52, 1, "Definition 52")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (53, 1, "Definition 53")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (54, 1, "Definition 54")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (55, 1, "Definition 55")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (56, 1, "Definition 56")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (57, 1, "Definition 57")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (58, 1, "Definition 58")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (59, 1, "Definition 59")');
	 tx.executeSql('INSERT INTO DEFINITIONS (def_id, def_type, def_text) VALUES (60, 1, "Definition 60")');	 
	 */
	 
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
    function(p_id, p_name, p_points)
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
		currentAllPlayers.add(results.rows.item(i).p_id, results.rows.item(i).p_name, 0);
    }
    numPlayers = currentAllPlayers.count;
}
function selectCurrentPlayer(){
    currentReader = currentAllPlayers.grabFirstPlayer().p_id;
    currentReaderName = currentAllPlayers.grabFirstPlayer().p_name;
    currentRoundPlayers.resetPlayers(currentReader);
    currentPlayer = currentRoundPlayers.grabNextPlayer().p_id;
    currentPlayerName = currentRoundPlayers.grabNextPlayer().p_name;
	createNewGameDB(errorCB, moveToNextPage);
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

function queryDBDefinitions(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(queryDBDefinitionsCall, errorCallBack, successCallBack);
}	
function queryDBDefinitionsCall(tx) {
	tx.executeSql('SELECT def_id, def_type, def_text FROM DEFINITIONS', [], queryDBDefinitionsSuccess, errorCB);
}
function queryDBDefinitionsSuccess(tx, results) {

    for(var i=0; i<results.rows.length;i++){
    	myDefinitions.add(results.rows.item(i).def_id, results.rows.item(i).def_type, results.rows.item(i).def_text, false);
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
	currentGameID = results.rows.item(0).g_id;
}

function addPlayerAnswerDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(addPlayerAnswerDBCall, errorCallBack, addPlayerAnswerDBSuccess);
}
function addPlayerAnswerDBCall(tx){
	var setPlayerName="";
	var a_def_id = 	$('input[name="definition"]:checked').val();//$("input:radio:checked").val();
	//alert(a_def_id);
	//alert(currentPlayer);
	tx.executeSql('INSERT INTO PLAYERANSWERS(g_id,p_id,word_id,def_id,a_vote_count,a_rank) VALUES (?,?,?,?,?,?)', [currentGameID, currentPlayer, currentQID, a_def_id, 0,0], successCB, errorCB);
	thePlayerAnswers.add(a_def_id, currentQID, currentPlayer, currentRound, currentGameID, 0, 0);
}	
function addPlayerAnswerDBSuccess(){
  	//alert('inside add player answer success db');
  	getPlayerAnswerDB(errorCB,successCB); //Get the list of all players entered into the database
}
function getPlayerAnswerDB(errorCallBack, successCallBack){
    var db = window.openDatabase("CrayPlay", "1.0", "CrayPlay DB", 1000000);
    db.transaction(getPlayerAnswerDBCall, errorCallBack, successCallBack);
}
function getPlayerAnswerDBCall(tx){
    tx.executeSql('SELECT def_id, p_id from PLAYERANSWERS WHERE g_id = ? and word_id = ? and p_id = ?', [currentPlayer, currentQID, currentGameID], getDBPlayerAnswerDBSuccess, errorCB);
}	
function getDBPlayerAnswerDBSuccess(tx, results) {
    for(var i=0; i<results.rows.length;i++){
		//thePlayerAnswers.add(results.rows.item(i).p_id, currentQID, results.rows.item(i).def_id, currentGameID, currentRound, 0, 0);
    }
}