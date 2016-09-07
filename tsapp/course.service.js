"use strict";
/**
 * name
 */
var CourseService = (function () {
    function CourseService() {
        this.courses = ["Blue", "Red", "Green"];
    }
    CourseService.prototype.getCourses = function () {
        return this.courses;
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map