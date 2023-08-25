export default function Parent({ children }) {
  return (
    <div className=" border-2 border-red-600 py-12 mx-7">
      <h1>Parent</h1>
      {children}
    </div>
  );
}
