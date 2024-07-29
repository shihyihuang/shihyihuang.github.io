import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from '@mui/material';
import Icon from "./icon";
import zIndex from "@mui/material/styles/zIndex";

interface Item {
    id: number;
    title: string;
    content: string;
    background: string;
}

export default function TapCard() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const items: Item[] = [
        { id: 1, title: "Programming Languages", content: "Java, TypeScript, Python, C#, JavaScript, (ReactJS / NextJS / NodeJS)", background:"/skills/programming.jpg" },
        { id: 2, title: "Databases", content: "SQL, (Oracle / PostgreSQL / MySQL), MongoDB", background:"/skills/data.jpg" },
        { id: 3, title: "Cloud and Containerization", content: "AWS(Amazon Web Services), Oracle Cloud, Docker, Kubernetes", background:"/skills/cloud.jpg" },
        { id: 4, title: "Web Development", content: "ASP.NET MVC, HTML, CSS, TailwindCSS, RESTful API Integration, MUI", background:"/skills/web.jpg" },
        { id: 5, title: "Methodologies", content: "Agile, Waterfall, DevOps, TDD (Test-Driven Development)", background:"/skills/methodologies.jpg" },
        { id: 6, title: "Others", content: "Git, Project Management, Figma, FCPX(Final Cut Pro X)", background:"/skills/others.jpg" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-10 mx-auto max-w-5xl">
            {items.map(item => (
                <motion.div key={item.id} layoutId={item.id.toString()} onClick={() => setSelectedId(item.id)} >
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Card 
                            className="shadow-xl rounded-lg relative overflow-hidden" 
                            sx={{
                                width: { xs: 160, sm: 200, md: 300 },
                                height: 200,
                                cursor: 'pointer',
                            }}
                        >
                            <div 
                                style={{
                                    backgroundImage: `url(${item.background})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    opacity: 0.8,
                                }}
                            />
                            <CardContent className="flex items-center justify-center h-full bg-black bg-opacity-35 relative z-10">
                                <motion.h5 className="text-center w-full text-white font-black text-xl">{item.title}</motion.h5>
                            </CardContent>
                        </Card>
                    </motion.div>
                    
                </motion.div>
            ))}
    
            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000
                            }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                layoutId={selectedId.toString()}
                                style={{ zIndex: 1001 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Card 
                                    className="bg-warning"
                                    sx={{ 
                                        width: { xs: 320, sm: 350, md: 380 },
                                        maxWidth: '90vw',
                                        height: '300', 
                                        maxHeight: '300vh',
                                        overflow: 'auto'
                                    }}
                                >
                                    <CardContent>
                                        <motion.button className="float-right" onClick={() => setSelectedId(null)}> <Icon name="closeSmall" /> </motion.button>
                                        <div className="p-5">
                                            <motion.h1 className="font-extrabold text-secondary text-xl">{items.find(item => item.id === selectedId)?.title}</motion.h1>
                                            {/* <motion.button className="mt-3" onClick={() => setSelectedId(null)}> <Icon name="closeSmall" /> </motion.button> */}
                                            {items.find(item => item.id === selectedId)?.content.split(',').map((line, index) => (
                                                <motion.div key={index} className="mt-1">
                                                    {line.trim()} 
                                                </motion.div>
                                            ))}
                                        </div>

                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}