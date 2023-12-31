import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo, updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";
function UserProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  // const handleEdit = () => {
  // };
  const handleRemove = (e, index) => {
    const newUser = { ...userInfo, addresses: [...userInfo.addresses] }; //for shallow copy
    // ...user.addresses ko is liye alag se kiya hai kyu ke addresses user ke ander jake ke aik array hai
    newUser.addresses.splice(index, 1); // index matlab konsa index delete karana hai or agey 1 se pata chalta hai ke kitne elements delete karne hai
    dispatch(updateUserAsync(newUser));
  };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  return (
    <div>
      <div className=" mt-12 mx-auto bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-signature font-bold tracking-tight text-gray-900">
            Name: {userInfo.name ? userInfo.name : "New User"}
          </h1>
          <h3 className="text-xl my-5 font-signature font-bold tracking-tight text-red-900">
            Email: {userInfo.email}
          </h3>
          {userInfo.role === "admin" && (
            <h3 className="text-xl my-5 font-signature font-bold tracking-tight text-red-900">
              Role: {userInfo.role}
            </h3>
          )}
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-700">Your Addresses :</p>
          {userInfo.addresses.map((address, index) => (
            <div>
              {/* ------------------------- */}
              <div className="flex justify-between px-5 gap-x-6 py-5 border-solid border-2 border-gray-200">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {address.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.street}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address.pinCode}
                    </p>
                  </div>
                </div>

                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    Phone:{address.phone}
                  </p>

                  <p className="text-sm leading-6 text-gray-500">
                    {address.city}
                  </p>
                </div>

                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <button
                    onClick={(e) => handleRemove(e, index)}
                    type="button"
                    className="rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    //font-medium text-indigo-600 hover:text-indigo-500 bg-green-600
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
