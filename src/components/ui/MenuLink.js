import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

export default function MenuLink({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    if (windowWidth <= 767) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 767) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 767) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <nav className="grid flex-[3_1_0%]">
      <div
        onClick={toggleCollapse}
        className="flex justify-between items-center"
      >
        <h2 className="mb-2 text-primary-brand-color text-lg font-normal">
          {title}
        </h2>
        <div className="grid md:hidden place-items-center min-w-[24px] min-h-[24px] rounded-md text-primary-brand-color bg-gray-100">
          <IoIosArrowDown size={18} />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <ol className="grid gap-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-sm">
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </Collapse>
    </nav>
  );
}
