import React from "react";
import Image from "next/image";
import pic from "../../../asset/pic.jpg";
import classnames from "classnames";
import { IconDelete, IconEdit } from "../icons";
import { User } from "../../../api/types";

type Props = {
  user: User;
  handleOpenUpdate: (user: User) => void;
  handleOpenDelete: (user: User) => void;
};

const User = ({ user, handleOpenUpdate, handleOpenDelete }: Props) => {
  return (
    <div
      className="bg-white flex items-center p-2 lg:py-4 lg:px-2
    rounded-lg shadow-lg"
    >
      <div className="flex items-center w-[50px]">
        <Image
          className="rounded-full"
          src={pic}
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
      <div className="flex-1 ml-3">
        <p className="text-sm tracking-wider md:text-base text-gray-500 font-medium uppercase">
          {user.fullName}
        </p>
        <p className="text-sm text-gray-500 font-normal">{user.mobileNumber}</p>
      </div>
      <div className="w-20 h-8 flex items-center space-x-2">
        <button
          className={classnames(
            "w-16 h-7 bg-red-500 hover:bg-red-900",
            "text-white leading-tight rounded",
            "shadow-md hover:shadow-lg",
            "focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800",
            "active:shadow-lg transition duration-150 ease-in-out"
          )}
          onClick={() => handleOpenDelete(user)}
        >
          <IconDelete size="h-4 w-4 mx-auto" />
        </button>
        <button
          className={classnames(
            "w-16 h-7 bg-blue-500 hover:bg-blue-900 text-white",
            "text-white leading-tight uppercase rounded",
            "shadow-md hover:shadow-lg",
            "focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800",
            "active:shadow-lg transition duration-150 ease-in-out"
          )}
          onClick={() => handleOpenUpdate(user)}
        >
          <IconEdit size="h-4 w-4 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default User;
