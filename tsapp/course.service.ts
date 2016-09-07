
/**
 * name
 */
export class CourseService {
    courses;
    
    constructor() {
        this.courses = ["Blue", "Red", "Green"];
    }
        
    getCourses() : string[] {
        return this.courses;
    }
}