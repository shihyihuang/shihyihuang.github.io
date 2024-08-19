import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | CloudSnap - Claire",
    description: "Claire's Projects - CloudSnap",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}