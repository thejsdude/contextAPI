import UserContext from "@/PassContext/page";
import { useContext } from "react";

export default function B({ children }) {
  const users = useContext(UserContext);
  console.log(users, "from B");
  return (
    <div className="border-2 border-yellow-500 py-12 mx-7">
      <h1>B</h1>
      {children}
    </div>
  );
}
