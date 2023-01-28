import { api } from "./axios";
import { IRUser, User } from "./types";

/**
 *  Update user
 *
 * @returns data? : User
 */
export const putUser = async ({
  _id,
  userinput,
}: {
  _id: string;
  userinput: IRUser;
}): Promise<User> => {
  const response = await api.put<User>(
    "user",
    {
      ...userinput,
    },
    {
      params: {
        _id,
      },
      withCredentials: true,
    }
  );
  return response.data;
};
