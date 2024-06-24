import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { IUser } from "~/modules/user/repository";

export default component$(() => {
  const {
    url: { origin },
  } = useLocation();

  const usersRes = useResource$<IUser[]>(async () => {
    const response = await fetch(`${origin}/api/users`);
    const data = await response.json();
    return data;
  });

  return (
    <>
      <div class="dark:text-white">
        <div class="grid grid-cols-2">
          <div class="">
            <Resource
              value={usersRes}
              onPending={() => <p>Loading...</p>}
              onResolved={(users) =>
                users.map((user) => (
                  <div key={user.id}>
                    <span class="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-neutral-400">
                      {user.name}
                    </span>

                    <ul class="list-disc list-inside mb-3 text-gray-800 dark:text-white">
                      {Object.keys(user).map((key) => (
                        <li key={key}>
                          {key + ": " + String(user[key as keyof IUser])}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              }
            />
          </div>

          <div class="p-4">
            <h2 class="text-2xl font-bold">Insert user</h2>
          </div>
        </div>
      </div>
    </>
  );
});
