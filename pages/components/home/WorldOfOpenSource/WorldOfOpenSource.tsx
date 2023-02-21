/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Container, IconButton, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BoundingBox, motion } from "framer-motion";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const WorldOfOpenSource: React.FC = () => {
    const constraintsRef = useRef(null);
    const LconstraintsRef = useRef(null);
    const KconstraintsRef = useRef(null);

    return (
        <>
            <Container maxWidth="lg" sx={{
                width: "80%",
                height: "320px",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "22px",
                marginTop: "10rem",
                marginX: "auto",
                gap: "2px",
            }}>
                <Box sx={{
                    width: "50%",
                    padding: "4rem 2rem",
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "2.2rem",
                            lineHeight: "2.2rem",
                            color: "lightgreen",
                        }}
                    >
                        Jump into the world of Open-source
                    </Typography>
                    <Typography
                        variant="h4"
                        my={"0.8rem"}
                        sx={{
                            fontWeight: "300",
                            fontSize: "1.05rem",
                            color: "white",
                        }}
                    >
                        built with the vision to encourage open-source enthusiasts!
                    </Typography>
                    <Link href={""} passHref>
                        <button
                            className="btn-blue my-2 text-sm flex items-center px-8 py-2 button_animation"
                            style={{
                                animationName: "moveInLeft",
                                color: "black",
                                backgroundColor: "lightgreen",
                            }}
                        >
                            Explore
                        </button>
                    </Link>
                </Box>
                <motion.div style={{
                    width: "40%",
                    height: "80%",
                    // display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                    backgroundColor: "rgba(40, 46, 54, 0.97)",
                    borderRadius: "28px",
                    padding: "12px",
                    border: "0.5px solid #FFFFFF",
                }} ref={constraintsRef}>

                    {/* <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        // dragElastic={{ top: 1, bottom: 1 }}
                        dragElastic={0}
                        style={{
                            // position: "relative",
                            // left: "-8%",
                            // top: "8%",
                            width: "50px",
                            maxWidth: "60px",
                            backgroundImage: `url('https://img.icons8.com/color/96/null/kubernetes--v1.png')`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            cursor: 'grab',
                        }}
                    // dragSnapToOrigin={true}
                    />

                    <motion.div
                        drag
                        dragConstraints={constraintsRef}
                        // dragElastic={{ top: 1, bottom: 1 }}
                        dragElastic={0}
                        style={{
                            // position: "relative",
                            // left: "-8%",
                            // top: "8%",
                            width: "50px",
                            maxWidth: "60px",
                            backgroundImage: `url('https://img.icons8.com/color/96/null/linux--v1.png')`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            cursor: 'grab',
                        }}
                    /> */}

                    <motion.div
                        drag
                        dragElastic={0}
                        dragConstraints={constraintsRef}
                        style={{
                            width: "fit-content",
                        }}
                    >
                        <GitHubIcon sx={{
                            fontSize: "42px",
                            cursor: 'grab',
                            color: "white",
                        }}
                        />
                    </motion.div>
                    <motion.div
                        drag
                        dragElastic={0}
                        dragConstraints={constraintsRef}
                        style={{
                            width: "fit-content",
                        }}
                    >
                        <GitHubIcon sx={{
                            fontSize: "42px",
                            cursor: 'grab',
                            color: "white",
                        }}
                        />
                    </motion.div>
                    <motion.div
                        drag
                        dragElastic={0}
                        dragConstraints={constraintsRef}
                        style={{
                            width: "fit-content",
                        }}
                    >
                        <GitHubIcon sx={{
                            fontSize: "42px",
                            cursor: 'grab',
                            color: "white",
                        }}
                        />
                    </motion.div>

                </motion.div>
            </Container>
        </>
    );
};


export default WorldOfOpenSource;
