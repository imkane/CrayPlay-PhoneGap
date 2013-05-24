var currentQID = 0;
var currentQText = "";
var currentQRealText = "";

var currentGameID = 0;
var currentRound = 1;

var currentReader = 0;
var currentReaderName = "";

var nextReader = 0;
var nextReaderName = "";

var currentPlayer = 0;
var currentPlayerName = "";

var nextPlayer = 0;
var nextPlayerName = "";

var currentStage = 0;
var maxRounds = 2;
var listCreated = true;
var numPlayers = 3;

var currentAllPlayers = new PlayerCollection();
var currentRoundPlayers = new RoundPlayerCollection();
var myWords = new WordCollection();
var myDefinitions = new DefinitionCollection();

function init(){
    document.addEventListener("deviceready", startup);
    initializeDB(errorCB, successCB);
	queryDBQuestions(errorCB, successCB);
	$.mobile.changePage("#terms", {role: "dialog", transition: "none"} );
}

function startup(){
	alert("device is ready");
}

function onClick(){
	$.mobile.changePage("#terms", {role: "dialog", transition: "none"} );
}

function onStartClick(){
	resetPlayers();
    $.mobile.changePage("add_players.html", {transition: "none"} );
}

function onRulesClick(){
    $.mobile.changePage("#rules", {transition: "none", reverse: false, changeHash: false} );
}

function onStartGameClick(){
	createNewGame();
}

function resetPlayers(){
	numPlayers = 3;
}

function grabCurrentPlayers(){
	appendToRoundOne();
}
function grabCurrentVariables(){
	appendCurrentVariables();
}
function createNewGame(){
	currentStage = 0;
	currentRound = 1;
	deletePlayersDB(errorCB,successCB);
	addPlayersDB(errorCB,successCB);
	queryNewWord();
	createNewGameDB(errorCB, moveToNextPage);
}

function queryNewWord(){
	var foundNewWord = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewWord == false && allUsed == false)
	{
		allUsed = checkForAllUsedWords();
	 	randomKey = Math.floor((Math.random()*myWords.count)+1);
	 	foundNewWord = !(myWords.item(randomKey).used_ind);
	}
	currentQID = myWords.item(randomKey).word_id;
	currentQText = myWords.item(randomKey).word_text;
	currentQRealText = myWords.item(randomKey).word_realtext;
	myWords.item(randomKey).used_ind = true;
}

function checkForAllUsedWords(){
	  var allUsed = true;
	  //todo: fix this logic
	  myWords.forEach(
	      function(word_id, word_text, word_realdef, used_ind)
	      {
	      	allUsed = used_ind;
	      	if(allUsed == false)
	      	return false;
	      });
	  return allUsed;
}

function resetPageVariables(stage_num)
{
	currentStage=stage_num;
}
function moveToNextPage(){
	
	currentStage++;
		
    switch(currentStage)
    {
    	case 1:
    		$.mobile.changePage("read_new_word.html", {transition: "none"} );
    		break;
    	case 2:
    		$.mobile.changePage("select_definition.html", {transition: "none"} );
    		break;
    	case 3:
    		// check if this is the last player to submit 
    		// if it's true goto stage 4
    		currentRoundPlayers.playerSubmitted(currentPlayer, true);
    		nextPlayer = currentRoundPlayers.grabNextPlayer().p_id;
		    nextPlayerName = currentRoundPlayers.grabNextPlayer().p_name;
		   	if(!currentRoundPlayers.checkAllSubmitted())
		   	{
		   		$.mobile.changePage("verify_def.html", {transition: "none"} );	
		   	}
		   	else
		   	{
		   		$.mobile.changePage("verify_def_last_player.html", {transition: "none"} );
		   	}
    		break;
    	case 4:
    		if(!currentRoundPlayers.checkAllSubmitted())
    		{
    			currentPlayer = nextPlayer;
    			currentPlayerName = nextPlayerName;
    			currentStage = 1;
    			moveToNextPage();
    		}
    		else
    		{
    			moveToNextPage();
    		}
    		break;
    	case 5:
    		$.mobile.changePage("rank_answers.html", {transition: "none"} );
    		break;
    	case 6:
    		$.mobile.changePage("read_answers.html", {transition: "none"} );
    		break;
    	case 7:
    		$.mobile.changePage("read_real_def.html", {transition: "none"} );
    		break;
    	case 8:
    		$.mobile.changePage("read_winner.html", {transition: "none"} );
    		break;
    	case 9:
    		$.mobile.changePage("assign_drink.html", {transition: "none"} );
    		break;
    	case 10:
			currentRound++;
			// if we are on the last stage we will increment the round and set the stage back to 1
			if (currentRound > maxRounds) 
			{
				currentStage = 10;
		    	$.mobile.changePage("game_over.html", {transition: "none"} );
		    }
		    else
		    {
		        currentStage = 0;
				//todo remove this - just for testing.
				currentReader = currentAllPlayers.grabSecondPlayer().p_id;
		    	currentReaderName = currentAllPlayers.grabSecondPlayer().p_name;
		    	currentRoundPlayers.resetPlayers(currentReader);
		    	currentPlayer = currentRoundPlayers.grabNextPlayer().p_id;
		    	currentPlayerName = currentRoundPlayers.grabNextPlayer().p_name;
		    	queryNewWord();
		    	moveToNextPage();
    		}
    		break;
		case 11:
		    $.mobile.changePage("index.html#mainmenu", {transition: "none"} );
    		break;
    	default:
    }
}

function moveToRoundOne(){
	//Move to the new page
    $.mobile.changePage("round_one.html", {transition: "none"} );
}

function appendToRoundOne(){
	$("#content").append("<ul id='currentplayerlist' data-role='listview' data-inset='true'></ul>");
    $("#content").trigger("create");
    
    currentAllPlayers.forEach(
    function(p_id, p_name)
    {
		$("#currentplayerlist").append("<li><label for='text-basic'>" + p_id + " " + p_name + "</label>");
		$("#content").trigger("create");
		$("#currentplayerlist").listview("refresh");
	});
	
	$("#currentplayerlist").append("<li><label for='text-basic'> " + currentQText + "</label>");
	$("#content").trigger("create");
	$("#currentplayerlist").listview("refresh");
}

function appendCurrentVariables(){
	$("#content").append("<ul id='currentvariables' data-role='listview' data-inset='true'></ul>");
    $("#content").trigger("create");
    
	$("#currentvariables").append("<li><label for='text-basic'>currentReader: " + currentReader + " name: " + currentReaderName + "</label>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");

	$("#currentvariables").append("<li><label for='text-basic'>currentPlayer: " + currentPlayer + " name: " + currentPlayerName + "</label>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");
	
	$("#currentvariables").append("<li><label for='text-basic'>currentQuestion: " + currentQText + "</label>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");
	
	$("#currentvariables").append("<li><label for='text-basic'>currentStage: " + currentStage + "</label>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");
	
	$("#currentvariables").append("<li><label for='text-basic'>currentRound: " + currentRound + "</label>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");
}

function appendToList(){
	//Create the listview if not created
	if(!listCreated){
	    $("#content").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
	    listCreated = true;
	    $("#content").trigger("create");
	}
	numPlayers += 1;
	$("#playerlist").append("<li><label for='text-basic'>Player "+numPlayers+":</label><input name='player"+numPlayers+"' id='player"+numPlayers+"name' value='' type='text'></li>");
	$("#content").trigger("create");
	$("#playerlist").listview("refresh");
}

function removeFromList(){
	$('#playerlist').children().remove('li');
	$("#content").trigger("create");
	$("#playerlist").listview("refresh");
	numPlayers -= 1;
}