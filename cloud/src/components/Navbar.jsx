import React from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg">
      <MenuIcon className="w-5" />
    </div>
  );
};

export default Navbar;
