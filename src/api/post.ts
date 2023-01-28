import { api } from "./axios";
import { IRUser, User } from "./types";

/**
 *  Register user
 *
 * @returns data? : User
 */
export const postUser = async (userinput: IRUser): Promise<User> => {
  const response = await api.post<User>(
    "user",
    {
      ...userinput,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};
