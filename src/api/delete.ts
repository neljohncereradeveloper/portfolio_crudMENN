import { api } from "./axios";
import { User } from "./types";

/**
 *  Delete user
 *
 * @returns data? : User
 */
export const deleteUser = async (_id: string): Promise<User> => {
  const response = await api.delete<User>("user", {
    params: {
      _id,
    },
    withCredentials: true,
  });
  return response.data;
};
