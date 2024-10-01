import React from "react";
import { SideNav } from "./SideNav";
import { Outlet } from "react-router-dom";

export function MasterLayout() {
  return (
    <>
      <div className="grid-cols-12 grid">
        <div className="col-span-2 bg-red-500">
          <SideNav />
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
