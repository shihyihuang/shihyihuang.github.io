import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "VibeRight | Projects - Claire",
    description: "Claire's Projects - VibeRight",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}