function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.rules = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "rules"
    });
    $.__views.rules && $.addTopLevelView($.__views.rules);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var delegate;
    exports.setDelegate = function(o) {
        delegate = o;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;