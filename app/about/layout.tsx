import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About - Claire",
    description: "About me - VibeRight",
}

export default function Layout({ children } : {children: React.ReactNode}){
    return <> {children} </>
}