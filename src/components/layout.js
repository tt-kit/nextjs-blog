
export default function RootLayout({ children }) {
  return <div className="container mx-auto sm:p-0 md:px-8 ">
    <div className=" max-w-5xl my-0 mx-auto">
      {children}
    </div>
  </div>;
}
