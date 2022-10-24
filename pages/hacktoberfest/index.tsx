import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Clueless_Hacktoberfest from '../components/Hacktoberfest/Clueless_Hacktoberfest'
import Guidelines from '../components/Hacktoberfest/Guidelines'
import Leaderboard from '../components/Hacktoberfest/Leaderboard'
import Projects from '../components/Hacktoberfest/Projects'
import RewardsAndPerks from '../components/Hacktoberfest/RewardsAndPerks'
import Swags from '../components/Hacktoberfest/Swags'
import Why_Contribute from '../components/Hacktoberfest/Why_Contribute'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar/Navbar'


const Hacktoberfest = () => {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
    return (
        <div>
            <Head>
                <title>Clueless | Hacktoberfest</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    ></link>
            </Head>
            {showButton && (
        <div
          id="return_top"
          style={{
            position: "fixed",
            zIndex: "99",
            right: "5%",
            top: "90%",
            width: "50px",
            height: "50px",
            textDecoration: "none",
            borderRadius: "50%",
            backgroundColor: "#0b5ac2",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={scrollToTop}
            className="fa fa-arrow-up"
            style={{ color: "white", fontSize: "25px" }}
          ></button>
        </div>
      )}
            <Navbar />
            <Leaderboard />
            <Clueless_Hacktoberfest />
            <RewardsAndPerks />
            <Projects />
            <Swags />
            <Why_Contribute />
            <Guidelines />
            <Footer />
        </div>
    )
}

export default Hacktoberfest