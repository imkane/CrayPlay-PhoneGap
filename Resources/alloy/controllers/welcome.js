function Controller() {
    function StartClick() {
        start_controller.getView().open();
    }
    function RulesClick() {
        rules_controller.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.welcome = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "welcome"
    });
    $.__views.welcome && $.addTopLevelView($.__views.welcome);
    $.__views.welcome_label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Welcome to CrayPlay",
        id: "welcome_label"
    });
    $.__views.welcome.add($.__views.welcome_label);
    $.__views.start_button = Ti.UI.createButton({
        id: "start_button",
        title: "Testing",
        top: "420",
        width: "100",
        height: "60"
    });
    $.__views.welcome.add($.__views.start_button);
    StartClick ? $.__views.start_button.addEventListener("click", StartClick) : __defers["$.__views.start_button!click!StartClick"] = true;
    $.__views.rules_button = Ti.UI.createButton({
        id: "rules_button",
        title: "Rules",
        top: "480",
        width: "100",
        height: "60"
    });
    $.__views.welcome.add($.__views.rules_button);
    RulesClick ? $.__views.rules_button.addEventListener("click", RulesClick) : __defers["$.__views.rules_button!click!RulesClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rules_controller = Alloy.createController("rules");
    var start_controller = Alloy.createController("start");
    exports.setDelegate = function(o) {
        rules_controller.setDelegate(o);
    };
    __defers["$.__views.start_button!click!StartClick"] && $.__views.start_button.addEventListener("click", StartClick);
    __defers["$.__views.rules_button!click!RulesClick"] && $.__views.rules_button.addEventListener("click", RulesClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;