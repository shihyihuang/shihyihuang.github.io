import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | VibeRight - Claire",
    description: "Claire's Projects - VibeRight",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}