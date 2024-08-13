import React from 'react';
import Link from 'next/link';
import Icon from "../../Icon";
import {motion} from "framer-motion";
import Tooltip from '@mui/material/Tooltip';

const Button = () => {
    
    return (
        <Link href="/contact">
            <Tooltip title="Contact Me" placement="left-start" arrow>
                <motion.button
                    className="btn btn-circle bg-primary border-transparent shadow-gray-400 shadow-md hover:border hover:bg-transparent hover:border-base-100"
                    whileHover={{
                        scale: 1.2
                    }}
                    whileTap={{
                        scale: 0.9
                    }}>
                    <Icon name="contact"/>
                </motion.button>
            </Tooltip>
        </Link>
    );
};
export default Button;