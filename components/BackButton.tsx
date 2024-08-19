'use client';
import {useRouter} from 'next/navigation';
import { motion } from "framer-motion";
import Icon from '@/components/Icon';

export default function BackButton() {
  const router = useRouter();
  return (
    <div className='w-full px-2 md:px-[calc(8.33%)]'>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={router.back}
            className="flex items-center">
            <Icon name="back" size="xl" color="#E43D12"/>
            <span className='text-base-100 text-2xl px-3'>Back</span>
        </motion.button>
    </div>
  )
}