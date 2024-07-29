import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects - Claire",
    description: "Claire's Projects",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}