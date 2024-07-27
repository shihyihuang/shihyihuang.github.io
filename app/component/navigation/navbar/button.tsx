import React from 'react';
import Link from 'next/link';
import Icon from "../../icon";
import {motion} from "framer-motion";

const Button = () => {
    return (
        <Link href="/contact">
            <motion.button
                className="btn btn-circle bg-primary border-transparent shadow-md hover:border hover:bg-transparent"
                whileHover={{
                    scale: 1.2
                }}
                whileTap={{
                    scale: 0.9
                }}>
                <Icon name="contact"/>
            </motion.button>
        </Link>
    );
};
export default Button;