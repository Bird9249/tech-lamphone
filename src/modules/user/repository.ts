export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface IUser {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  isAdmin: boolean;
  createdAt: Date;
}

export const users: IUser[] = [
  {
    id: "1",
    name: "user 1",
    age: 15,
    gender: Gender.Male,
    isAdmin: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "user 2",
    age: 20,
    gender: Gender.Female,
    isAdmin: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "user 3",
    age: 25,
    gender: Gender.Male,
    isAdmin: true,
    createdAt: new Date(),
  },
];

console.log(users);
