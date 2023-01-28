/**
 * IR - input registration
 * IU - input update
 * M - model
 */

export type MUser = {
  error: boolean;
  data: User[];
};
export type User = {
  _id: string;
  fullName: string;
  mobileNumber: string;
};
export type IRUser = {
  fullName: string;
  mobileNumber: string;
};
