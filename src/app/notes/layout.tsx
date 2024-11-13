import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="">
        <main className="m-auto max-w-7xl p-4">{children}</main>
      </div>
    </>
  );
}
