import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserAsync } from "../userSlice";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <div><h1 className="p-10 text-4xl bg-zinc-900 text-gray-50">Hello World</h1></div>
    </div>
  );
}
