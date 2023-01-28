/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpenDelete: boolean;
  handleSubmitDelete: (e: React.FormEvent) => Promise<void>;
  handleCloseDelete: () => void;
  deleteLoading: boolean;
};

const UserDelete = ({
  isOpenDelete,
  handleSubmitDelete,
  handleCloseDelete,
  deleteLoading,
}: Props) => {
  return (
    <Transition show={isOpenDelete} as={Fragment}>
      <Dialog
        open={isOpenDelete}
        onClose={handleCloseDelete}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        {/* Use one Transition.Child to apply one transition to the backdrop... */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* The actual dialog panel  */}
            <Dialog.Panel className="flex flex-col w-full md:w-5/12 md:px-10 px-5 py-10 rounded bg-white">
              <Dialog.Title
                as="h2"
                className="text-gray-900 text-xl md:text-2xl font-semibold text-center mb-4"
              >
                Delete User
              </Dialog.Title>
              <Dialog.Description>
                This will permanently delete this User
              </Dialog.Description>

              <div className="mt-8 flex space-x-4">
                <button
                  type="button"
                  className="flex-1 bg-blue-500 hover:bg-blue-900 text-white py-2 md:py-3 text-center rounded-md"
                  onClick={handleSubmitDelete}
                  disabled={deleteLoading ? true : false}
                >
                  {deleteLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-auto"></div>
                    </>
                  ) : (
                    "Ok"
                  )}
                </button>
                <button
                  type="button"
                  className="flex-1 bg-red-500 hover:bg-red-900 text-white py-2 md:py-3 text-center rounded-md"
                  onClick={handleCloseDelete}
                  disabled={deleteLoading ? true : false}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserDelete;
