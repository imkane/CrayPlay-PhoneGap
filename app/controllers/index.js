var welcome_controller = Alloy.createController('welcome');
welcome_controller.setDelegate($);

function AcceptClick()
{
	welcome_controller.getView().open();
}

function DeclineClick()
{
	alert("Will Close The App");
}

$.index.open();