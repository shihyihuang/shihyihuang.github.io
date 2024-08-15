import React from 'react'
import Link from "next/link";
import {motion} from "framer-motion";
import Icon from "@/components/Icon";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-primary grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <motion.button
          className="absolute right-0 p-5"
          onClick={toggle}
          whileHover={{
            scale: 1.5
          }}
          whileTap={{
            scale: 0.9
          }}>
          <Icon name="close" size="xl" color="#E43D12"/>
        </motion.button>

        <motion.div
          className="flex flex-col items-center justify-center h-full"
          initial={{ opacity: 1, scale: 1, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}>
          <ul className="sidebar-nav text-center leading-relaxed text-xl flex flex-col space-y-8">
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About" },
              { href: "/projects", text: "Projects" },
              { href: "/contact", text: "Contact" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{
                  scale: 1.5
                }}
                whileTap={{
                  scale: 0.9
                }}>
                <Link href={item.href} onClick={toggle}>
                  <p>{item.text}</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;