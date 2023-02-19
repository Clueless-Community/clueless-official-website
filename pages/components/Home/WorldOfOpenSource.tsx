/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const WorldOfOpenSource: React.FC = () => {
    const constraintsRef = useRef(null);

    return (
        <>
            <Container maxWidth="md" sx={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
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
                        mt={"0.8rem"}
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
                                backgroundColor: "lightgreen"
                            }}
                        >
                            Explore events
                        </button>
                    </Link>
                </Box>
                <Box
                    sx={{
                        width: "50%",
                        justifyContent: "center",
                        alignContent: "center",
                    }}>
                    <motion.div className="drag-area" ref={constraintsRef} style={{
                        height: "90%",
                        backgroundColor: "rgba(40, 46, 54, 0.97)",
                        borderRadius: "20px",
                    }} />
                    <motion.div drag dragConstraints={constraintsRef} style={{
                        height: "20%",
                        width: "20%",
                        backgroundColor: "white",
                        borderRadius: "20px",
                    }} >
                        <img src="/icons/icon7.svg" alt="https://www.linux.org/"></img>
                        <img src="/icons/icon2.svg" alt="https://www.kubernetes.com/"></img>
                        <GitHubIcon className="text-white mb-8" fontSize='inherit' sx={{ fontSize: "50px" }} />
                    </motion.div>
                </Box>
            </Container>
        </>
    );
};


export default WorldOfOpenSource;
