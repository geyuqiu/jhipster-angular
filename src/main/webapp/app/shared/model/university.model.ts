import { IStudent } from '@/shared/model/student.model';

export interface IUniversity {
  id?: number;
  name?: string;
  standards?: IStudent[];
}

export class University implements IUniversity {
  constructor(public id?: number, public name?: string, public standards?: IStudent[]) {}
}
