import { TeamMember } from './team-member';

export class Team {
  /**
   *
   */
  constructor(id: number, name: string, members: TeamMember[]) {
    this.id = id;
    this.name = name;
    this.members = members;
    members.forEach(element => {
      element.team = this.name;
    });
  }
  
  id: number;
  name: string;
  members: TeamMember[];
  total: number;
}