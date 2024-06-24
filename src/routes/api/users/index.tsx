import type { RequestHandler } from "@builder.io/qwik-city";
import { users } from "~/modules/user/repository";

export const onGet: RequestHandler = async ({ json }) => {
  json(200, users);
};
