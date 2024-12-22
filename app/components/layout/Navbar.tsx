import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      Navbar
      <div className="hidden md:flex items-center">
        <Image
          src="/search.png"
          alt="navbar search icon"
          width={20}
          height={20}
        />
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <div>
          <Image src="/message.png" alt="navbar message icon" />
        </div>
        <div>
          <Image src="/notification.png" alt="navbar notification icon" />
          <div>1</div>
        </div>
        <div>
          <span>John doe</span>
          <span>admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
