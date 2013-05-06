var rules_controller = Alloy.createController('rules');
var start_controller = Alloy.createController('start');

exports.setDelegate = function(o) {
	rules_controller.setDelegate(o);
};

/*
$.start_button.addEventListener("click",function(e){
	start_controller.getView().open();
});
*/
function StartClick(e)
{
	start_controller.getView().open();
};

function RulesClick(e) 
{  
     rules_controller.getView().open();
};