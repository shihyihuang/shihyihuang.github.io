import React from 'react'
import Link from "next/link";
import {motion} from "framer-motion";
import Icon from "../../icon";

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
                <Icon name="close"/>
          </motion.button> 
        <motion.div 
          initial={{ opacity: 1, scale: 1, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            // y: { type: "spring", stiffness: 30 },
          }}>
            <ul className="sidebar-nav text-center leading-relaxed text-xl">
                <motion.li whileHover={{
                    scale: 1.5
                }}
                whileTap={{
                    scale: 0.9
                }}>
                    <Link href="/about" onClick={toggle}>
                        <p>About</p>
                    </Link>
                </motion.li>
                <motion.li whileHover={{
                    scale: 1.5
                }}
                whileTap={{
                    scale: 0.9
                }}>
                    <Link href="/projects" onClick={toggle}>
                        <p>Projects</p>
                    </Link>
                </motion.li>
                <motion.li whileHover={{
                    scale: 1.5
                }}
                whileTap={{
                    scale: 0.9
                }}> 
                    <Link href="/about" onClick={toggle}>
                        <p>life</p>
                    </Link>
                </motion.li>
                <motion.li whileHover={{
                    scale: 1.5
                }}
                whileTap={{
                    scale: 0.9
                }}> 
                    <Link href="/contact" onClick={toggle}>
                        <p>Contact</p>
                    </Link>
                </motion.li>
            </ul>
        </motion.div>


      </div>
    </>
  );
};

export default Sidebar;
