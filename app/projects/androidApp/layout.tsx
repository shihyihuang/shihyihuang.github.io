import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Android App - Claire",
    description: "Claire's Projects - Android App",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}