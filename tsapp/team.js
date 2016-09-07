"use strict";
var Team = (function () {
    /**
     *
     */
    function Team(id, name, members) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.members = members;
        members.forEach(function (element) {
            element.team = _this.name;
        });
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map