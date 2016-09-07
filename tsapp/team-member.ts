export class TeamMember {
  
  constructor(id: number, name: string, score: number, teamName: string, grade: string) {
    this.id = id;
    this.name = name;
    this.score = score;
    this.team = teamName;
    this.onsite = grade;
  }
  
  id: number;
  name: string;
  score: number;
  team: string;
  onsite: string;
}