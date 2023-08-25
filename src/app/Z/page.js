"use client";

import UserContext from "@/PassContext/page";
import { useContext } from "react";

export default function Z() {
  const datas = useContext(UserContext);
  return (
    <div className="border-2 border-green-500 py-12 mx-7">
      <h1>Z</h1>
      <h1 className="underline">Childs:-</h1>
      <ul>
        {datas.map((data) => (
          <li key={data.key}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
