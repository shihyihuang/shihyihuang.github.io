import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Xkeleton - Claire",
    description: "Claire's Projects - Xkeleton",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}