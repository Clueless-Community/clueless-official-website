/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { Container, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { calcLength, motion } from "framer-motion";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LineAxis } from "@mui/icons-material";

const WorldOfOpenSource: React.FC = () => {
    const constraintsRef = useRef(null);
    const LconstraintsRef = useRef(null);
    const KconstraintsRef = useRef(null);

    return (
        <>
            <Container maxWidth="lg" sx={{
                width: "80%",
                height: "320px",
                backgroundColor: "black",
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
                                backgroundColor: "lightgreen"
                            }}
                        >
                            Explore events
                        </button>
                    </Link>
                </Box>
                <Box sx={{
                    width: "40%",
                    height: "80%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "rgba(40, 46, 54, 0.97)",
                    borderRadius: "28px",
                    padding: "1rem 2rem",
                    border: "0.5px solid #FFFFFF"
                }}>
                    <motion.div style={{
                        // width: "100%",
                        // height: "100%",
                    }} ref={KconstraintsRef} />
                    <motion.div drag
                        dragConstraints={KconstraintsRef}
                        style={{
                            backgroundImage: `url("/icons/icon2.svg")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: "45px",
                        }} />
                    <motion.div style={{
                        // width: "100%",
                        // height: "100%",
                    }} ref={constraintsRef} />
                    <motion.div drag dragConstraints={constraintsRef} >
                        <GitHubIcon className="text-white" sx={{
                            fontSize: "50px",
                        }} />
                    </motion.div>
                    <motion.div style={{
                        // width: "100%",
                        // height: "100%",
                    }} ref={LconstraintsRef} />
                    <motion.div drag dragConstraints={LconstraintsRef}
                        style={{
                            backgroundImage: `url("/icons/icon7.svg")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: "65px"
                        }} />
                </Box>
            </Container>
        </>
    );
};


export default WorldOfOpenSource;
