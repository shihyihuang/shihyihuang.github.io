import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact - Claire",
    description: "Contact Claire",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}