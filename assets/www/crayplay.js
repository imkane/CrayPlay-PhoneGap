var currentQID = 0;
var currentQText = "";
var currentQRealText = "";

var currentDefID = 0;
var currentDefText = "";

//Current Definitions
var currentDef1ID = 0;
var currentDef1Text = "";
var currentDef2ID = 0;
var currentDef2Text = "";
var currentDef3ID = 0;
var currentDef3Text = "";
var currentDef4ID = 0;
var currentDef4Text = "";
var currentDef5ID = 0;
var currentDef5Text = "";

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

var currentStage = 5;
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
	queryDBQuestions(errorCB,successCB);
	queryDBDefinitions(errorCB,successCB);
	$.mobile.changePage("#terms", {role: "dialog", transition: "none"} );
}

function startup(){
	//alert("device is ready");
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

function onReceviedDefinition(){
	//alert($("input:radio:checked").val());
	addPlayerAnswerDB(errorCB,successCB);
	moveToNextPage();
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
}

function queryNewDefinition(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDefID = myDefinitions.item(randomKey).def_id;
	currentDefText = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}
/*
function queryNewDefinition(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDefID = myDefinitions.item(randomKey).def_id;
	currentDefText = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}*/
function queryNewDefinition(){
	queryNewDefinition1();
	queryNewDefinition2();
	queryNewDefinition3();
	queryNewDefinition4();
	queryNewDefinition5();
}
function queryNewDefinition1(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDef1ID = myDefinitions.item(randomKey).def_id;
	currentDef1Text = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}
function queryNewDefinition2(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDef2ID = myDefinitions.item(randomKey).def_id;
	currentDef2Text = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}
function queryNewDefinition3(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDef3ID = myDefinitions.item(randomKey).def_id;
	currentDef3Text = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}
function queryNewDefinition4(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDef4ID = myDefinitions.item(randomKey).def_id;
	currentDef4Text = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
}
function queryNewDefinition5(){
	var foundNewDef = false;
	var randomKey = 0;
	var allUsed = false;
	
	while (foundNewDef == false && allUsed == false)
	{
		allUsed = checkForAllUsedDefs();
	 	randomKey = Math.floor((Math.random()*myDefinitions.count)+1);
	 	foundNewDef = !(myDefinitions.item(randomKey).used_ind);
	}
	currentDef5ID = myDefinitions.item(randomKey).def_id;
	currentDef5Text = myDefinitions.item(randomKey).def_text;
	myDefinitions.item(randomKey).used_ind = true;
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
	currentQRealText = myWords.item(randomKey).word_realdef;
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

function checkForAllUsedDefs(){
	  var allUsed = true;
	  //todo: fix this logic
	  myDefinitions.forEach(
	      function(def_id, def_text, used_ind)
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
			queryNewDefinition();
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
    $("#currentvariables").append("<div>");
	//$("#currentvariables").append("<li><label for='text-basic'>currentStage: " + currentStage + "</label></li>");
	$("#currentvariables").append("<li><center><label for='text-basic'>Round: " + currentRound + "</label></center></li>");
	
	// HEADER
	switch(currentStage)
	{
		case 1:
			//$("#currentvariables").append("<li><label for='text-basic'>currentPlayer: " + currentPlayer + " name: " + currentPlayerName + "</label></li>");
			$("#currentvariables").append("<li><center><label for='text-basic'>" + currentReaderName + "</label></center></li>");
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Read the following out loud to the other players...</legend>");	
			$("#currentvariables").append("<li><label for='text-basic'>Re-define the following word or phase:</label></li>");
			$("#currentvariables").append("<li><center><span style='font-size:large;'>\"" + currentQText + "\"</span></center></li>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("</div>");
			//$("#currentvariables").append("<li><label for='text-basic'>currentQuestionRealText: " + currentQRealText + "</label></li>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 2:
			$("#currentvariables").append("<li><center><label for='text-basic'>" + currentPlayerName + "</label></center></li>");
			$("#currentvariables").append("<li><label for='text-basic'>Re-define the following word or phase:</label></li>");
			$("#currentvariables").append("<li><center><span style='font-size:large;'>\"" + currentQText + "\"</span></center></li>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
			break;
		case 3:
			$("#currentvariables").append("<li><center><label for='text-basic'>" + currentPlayerName + "</label></center></li>");
			$("#currentvariables").append("<li><label for='text-basic'>Re-define the following word or phase:</label></li>");
			$("#currentvariables").append("<li><center><span style='font-size:large;'>\"" + currentQText + "\"</span></center></li>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 5:
			$("#currentvariables").append("<li><center><label for='text-basic'>" + currentReaderName + "</label></center></li>");
		break;
		default:
			//$("#currentvariables").append("<li><label for='text-basic'>currentReader: " + currentReader + " name: " + currentReaderName + "</label></li>");
			$("#currentvariables").append("<li><center><label for='text-basic'>" + currentPlayerName + "</label></center></li>");
		break;
	}
	$("#currentvariables").append("</div>");
	$("#content").trigger("create");
	$("#currentvariables").listview("refresh");
	
	//BODY
	switch(currentStage)
	{
		case 1:
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Now pass the device to:</legend>");
			$("#currentvariables").append("<li><center><label for='text-basic'>"+currentPlayerName+"</label></center></li>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='moveToNextPage()' value='"+currentPlayerName+" - Click to Continue'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 2:
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Definitions</legend>");	
			$("#currentvariables").append("<div id='radio'>");
			$("#currentvariables").append("<input name='definition' id='radio1' value='" + currentDef1ID + "' type='radio'><label for='radio1'>"+currentDef1Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio2' value='" + currentDef2ID + "' type='radio'><label for='radio2'>"+currentDef2Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio3' value='" + currentDef3ID + "' type='radio'><label for='radio3'>"+currentDef3Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio4' value='" + currentDef4ID + "' type='radio'><label for='radio4'>"+currentDef4Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio5' value='" + currentDef5ID + "' type='radio'><label for='radio5'>"+currentDef5Text+"</label>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("</div>");
			
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='onReceviedDefinition()' value='Submit'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 3:
			$("#currentvariables").append("<li><label for='text-basic'><center>Definition recieved!</label></center></li>");
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Now pass the device to:</legend>");
			$("#currentvariables").append("<li><center><label for='text-basic'>"+nextPlayerName+"</label></center></li>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='moveToNextPage()' value='"+nextPlayerName+" - Click to Continue'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 4:
			$("#currentvariables").append("<li><label for='text-basic'><center>Definition recieved!</label></center></li>");
			$("#currentvariables").append("<li><label for='text-basic'><center>All definitions are in!</label></center></li>");
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Now pass the device back to:</legend>");
			$("#currentvariables").append("<li><center><label for='text-basic'>"+currentReaderName+"</label></center></li>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='moveToNextPage()' value='"+currentReaderName+" - Click to Continue'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		case 5:
			$("#currentvariables").append("<li><label for='text-basic'><center>Rank Definitions</label></center></li>");
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Drag the definitions below to change their ranks.  Your most favourite definition is at the bottom</legend>");
			$("#currentvariables").append("<ul data-role='listview' id='sortable' data-divider-theme='b' data-inset='true'>");
            $("#currentvariables").append("<li data-role='list-divider' role='heading'>Re-order</li>");
            $("#currentvariables").append("<li data-theme='c'>1</li>");
            $("#currentvariables").append("<li data-theme='c'>2</li>");
            $("#currentvariables").append("<li data-theme='c'>3</li>");
            $("#currentvariables").append("<li data-theme='c'>4</li>");
            $("#currentvariables").append("<li data-theme='c'>5</li>");
            $("#currentvariables").append("<li data-theme='c'>6</li>");
            $("#currentvariables").append("<li data-theme='c'>7</li>");
			$("#currentvariables").append("</ul>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='onRankAnswersSubmit()' value='Submit'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
		default:
			$("#currentvariables").append("<div data-role='fieldcontain'>");
			$("#currentvariables").append("<fieldset data-role='controlgroup'>");	
			$("#currentvariables").append("<legend>Definitions</legend>");	
			$("#currentvariables").append("<div id='radio'>");
			$("#currentvariables").append("<input name='definition' id='radio1' value='" + currentDef1ID + "' type='radio'><label for='radio1'>"+currentDef1Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio2' value='" + currentDef2ID + "' type='radio'><label for='radio2'>"+currentDef2Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio3' value='" + currentDef3ID + "' type='radio'><label for='radio3'>"+currentDef3Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio4' value='" + currentDef4ID + "' type='radio'><label for='radio4'>"+currentDef4Text+"</label>");
			$("#currentvariables").append("<input name='definition' id='radio5' value='" + currentDef5ID + "' type='radio'><label for='radio5'>"+currentDef5Text+"</label>");
			$("#currentvariables").append("</div>");
			$("#currentvariables").append("</fieldset>");
			$("#currentvariables").append("</div>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
			
			$("#currentvariables").append("<input type='button' id='submitDefinition' onClick='onReceviedDefinition()' value='Submit'/>");
			$("#content").trigger("create");
			$("#currentvariables").listview("refresh");
		break;
	}
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