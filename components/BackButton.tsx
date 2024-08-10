'use client';
import {useRouter} from 'next/navigation';
import { motion } from "framer-motion";
import Icon from '@/components/Icon';

export default function BackButton() {
  const router = useRouter();
  return (
    <div className='w-full px-2 md:px-[calc(8.33%)]'>
        <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={router.back}
            // style={{ marginBottom: "20px" }}
            className="mb-2 mt-2">
            <Icon name="back" />
        </motion.button>
    </div>
  )
}