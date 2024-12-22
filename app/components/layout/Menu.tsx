import React from "react";
import { menuItems } from "@/app/constants/constants";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div>
      {menuItems.map((menu) => (
        <div>
          <span className="hidden lg:block text-indigo-400 font-light my-4">
            {menu.title}
          </span>
          {menu.items.map((item) => {
            if (item.visible) {
              return (
                <Link href={item.href}>
                  <Image
                    src={item.icon}
                    alt="sidebar menu icon"
                    width={20}
                    height={20}
                  />
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
