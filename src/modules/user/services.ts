import type { IUser } from "./repository";
import { users } from "./repository";

export function addUser(input: IUser) {
  users.push(input);

  console.log(users);
}
