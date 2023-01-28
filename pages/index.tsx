import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Users from "../src/components/users";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getUsers } from "../src/api/get";
import { postUser } from "../src/api/post";
import TechStack from "../src/components/techstack";
import { putUser } from "../src/api/put";
import { User } from "../src/api/types";
import { deleteUser } from "../src/api/delete";

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["users"], () => getUsers(""));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [registerNotification, setRegisterNotification] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);
  const [userId, setUserId] = useState("");
  const [userDeleteId, setUserDeleteId] = useState("");
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [dataInput, setDataInput] = useState({
    fullName: "",
    mobileNumber: "",
  });
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data, isLoading } = useQuery(["users"], () => getUsers(""));
  const {
    mutateAsync: asyncRegisterUser,
    isLoading: registerLoading,
    isError: registerError,
  } = useMutation(postUser);
  const {
    mutateAsync: asyncUpdateUser,
    isLoading: updateLoading,
    isError: updateError,
  } = useMutation(putUser);
  const {
    mutateAsync: asyncDeleteUser,
    isLoading: deleteLoading,
    isError: deleteError,
  } = useMutation(deleteUser);

  /**
   * Employee Registration
   */
  const handleSubmitRegistration = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    await asyncRegisterUser(
      {
        fullName: dataInput.fullName,
        mobileNumber: dataInput.mobileNumber,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["users"]);
          setDataInput({
            fullName: "",
            mobileNumber: "",
          });

          /** closing alert after 4 seconds */
          setRegisterNotification(true);
          setTimeout(() => {
            setRegisterNotification(false);
          }, 8000);
        },
        onError: (err: any, newTodo, context) => {
          /** closing alert after 4 seconds */
          setRegisterNotification(true);
          setTimeout(() => {
            setRegisterNotification(false);
          }, 8000);
        },
      }
    );
  };
  /**
   * Employee Update
   */
  const handleSubmitUpdate = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await asyncUpdateUser(
      { _id: userId, userinput: dataInput },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["users"]);
          setDataInput({
            fullName: "",
            mobileNumber: "",
          });
          /** closing alert after 8 seconds */
          setUpdateNotification(true);
          setTimeout(() => {
            setUpdateNotification(false);
          }, 8000);
        },
        onError: (err: any, newTodo, context) => {
          /** closing alert after 8 seconds */
          setUpdateNotification(true);
          setTimeout(() => {
            setUpdateNotification(false);
          }, 8000);
        },
      }
    );
  };
  /**
   * Employee Delete
   */
  const handleSubmitDelete = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await asyncDeleteUser(userDeleteId, {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        setIsOpenDelete(false);
      },
      onError: (err: any, newTodo, context) => {
        setIsOpenDelete(false);
        /** closing alert after 5 seconds */
      },
    });
  };
  // Open update modal
  const handleOpenUpdate = (user: User) => {
    setIsOpenUpdate(true);
    setUserId(user._id as string);
    setDataInput({
      fullName: user.fullName,
      mobileNumber: user.mobileNumber,
    });
  };
  // Open delete modal
  const handleOpenDelete = (user: User) => {
    setIsOpenDelete(true);
    setUserDeleteId(user._id as string);
  };
  // close update modal
  const handleCloseUpdate = () => {
    setIsOpenUpdate(false);
  };
  // close update modal
  const handleCloseDelete = () => {
    setIsOpenDelete(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Head>
        <title>MENN CRUD</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next Js Crud App" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:col-span-2 col-span-3 h-full w-full">
        <Users
          data={data}
          isLoading={isLoading}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChange={handleChange}
          handleSubmitRegistration={handleSubmitRegistration}
          handleSubmitUpdate={handleSubmitUpdate}
          handleSubmitDelete={handleSubmitDelete}
          dataInput={dataInput}
          handleOpenDelete={handleOpenDelete}
          handleOpenUpdate={handleOpenUpdate}
          handleCloseUpdate={handleCloseUpdate}
          handleCloseDelete={handleCloseDelete}
          isOpenUpdate={isOpenUpdate}
          isOpenDelete={isOpenDelete}
          registerLoading={registerLoading}
          registerError={registerError}
          registerNotification={registerNotification}
          updateLoading={updateLoading}
          updateError={updateError}
          updateNotification={updateNotification}
          deleteLoading={deleteLoading}
        />
      </div>
      <div className="md:col-span-1 col-span-3 h-full w-full bg-white rounded shalow-lg flex- flex-col md:p-10 p-5">
        <TechStack />
      </div>
    </>
  );
};

export default Home;
