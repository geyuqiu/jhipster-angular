export interface IStudent {
  id?: number;
  name?: string;
  universityName?: string;
  universityId?: number;
}

export class Student implements IStudent {
  constructor(public id?: number, public name?: string, public universityName?: string, public universityId?: number) {}
}
