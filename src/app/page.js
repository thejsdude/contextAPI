"use client";
import UserContext from "@/PassContext/page";
import A from "./A/page";
import B from "./B/page";
import C from "./C/page";
import Parent from "./Parent/page";
import Z from "./Z/page";
import React from "react";

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];
export default function Home() {
  return (
    <main className="min-h-screen text-center mt-12">
      <UserContext.Provider value={users}>
        <Parent>
          <A>
            <B>
              <C>
                <Z></Z>
              </C>
            </B>
          </A>
        </Parent>
      </UserContext.Provider>
    </main>
  );
}
