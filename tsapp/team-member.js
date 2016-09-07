"use strict";
var TeamMember = (function () {
    function TeamMember(id, name, score, teamName, grade) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.team = teamName;
        this.onsite = grade;
    }
    return TeamMember;
}());
exports.TeamMember = TeamMember;
//# sourceMappingURL=team-member.js.map