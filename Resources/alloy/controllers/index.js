function Controller() {
    function AcceptClick() {
        welcome_controller.getView().open();
    }
    function DeclineClick() {
        alert("Will Close The App");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.terms_label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Terms and Conditions",
        id: "terms_label"
    });
    $.__views.index.add($.__views.terms_label);
    $.__views.accept_button = Ti.UI.createButton({
        id: "accept_button",
        title: "Accept",
        top: "400",
        width: "120",
        height: "60"
    });
    $.__views.index.add($.__views.accept_button);
    AcceptClick ? $.__views.accept_button.addEventListener("click", AcceptClick) : __defers["$.__views.accept_button!click!AcceptClick"] = true;
    $.__views.decline_button = Ti.UI.createButton({
        id: "decline_button",
        title: "Decline",
        top: "460",
        width: "120",
        height: "60"
    });
    $.__views.index.add($.__views.decline_button);
    DeclineClick ? $.__views.decline_button.addEventListener("click", DeclineClick) : __defers["$.__views.decline_button!click!DeclineClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var welcome_controller = Alloy.createController("welcome");
    welcome_controller.setDelegate($);
    $.index.open();
    __defers["$.__views.accept_button!click!AcceptClick"] && $.__views.accept_button.addEventListener("click", AcceptClick);
    __defers["$.__views.decline_button!click!DeclineClick"] && $.__views.decline_button.addEventListener("click", DeclineClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;