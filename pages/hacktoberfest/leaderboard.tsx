import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { FaAngleUp } from "react-icons/fa";

interface Ileaderboard {
    position: number;
    userName: string;
    PRLinks: string[];
    PRCount: number;
    Score: number;
    avatarUrl: string;
}

const Leaderboard: React.FC = (leaderboardData) => {
    const leaderBoardDataArray: any = Object.values(leaderboardData)[0];

    const allData =
        leaderBoardDataArray &&
        (leaderBoardDataArray.map((i: any, ind: number) => ({
            ...i,
            position: ind + 1,
        })) as Ileaderboard[]);

    const [search, setSearch] = useState("");
    const [showButton, setShowButton] = useState(false);
    const [searchResult, setSearchResult] = useState(allData);

    function searchCards(clearSearchFlag: boolean) {
        let searchRes;
        const SearchBar = document.getElementById(
            "searchBar"
        ) as HTMLInputElement;

        clearSearchFlag
            ? (setSearch(""), (searchRes = allData), (SearchBar.value = ""))
            : (searchRes = allData.filter((item: Ileaderboard) =>
                  item.userName.toLowerCase().includes(search.toLowerCase())
              ));
        setSearchResult(searchRes);
    }

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
        <div className="">
            <Head>
                <title>Leaderboard</title>
            </Head>
            <Navbar />
            <div className="xl:my-20 my-4 md:mx-40 sm:mx-4 mx-1">
                <h1 className="flex justify-center w-full xl:space-x-16 space-x-8 items-center xl:py-8 pb-4 xl:text-5xl md:text-3xl sm:text-2xl text-xl font-bold">
                    🥇Clueless LeaderBoard🥇
                </h1>
                <p className="my-1.5 sm:my-3 text-center">
                    Leaderboard will be updated everyday. Checkout the Points
                    System{" "}
                    <a
                        href="https://clueless-resources.super.site/hacktoberfest/how-points-are-calculated"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        here
                    </a>
                    .
                </p>
                <div className="w-[100%] h-10 mt-8 flex flex-row relative">
                    <input className="flex flex-row pl-[15px] border-[1px] border-black rounded text-black w-[100%] lg:w-[90%] lg:text-base text-sm"
                        id="searchBar"
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Enter your github username"
                    />
                    <button className="text-blue-600 absolute right-20 top-2 font-semibold lg:right-44"
                        onClick={() => {
                            searchCards(true);
                        }}>
                        Clear
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-500 lg:w-[150px] text-white rounded lg:ml-4 w-[80px] ml-2"
                        onClick={() => {
                            searchCards(false);
                        }}>
                        Search
                    </button>
                </div>
                <table className="w-full xl:text-xl text-lg box-content my-8 xl:my-12">
                    <thead className="bg-[#1C1525] text-white">
                        <tr className="text-left child:py-2 child:px-2">
                            <th className="xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm">
                                No
                            </th>
                            <th>Name</th>
                            <th className="text-center">PR Merged</th>
                            <th className="xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit">
                                Points
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {showButton && (<div id="return_top" style={{position:"fixed",zIndex:"99",right:"5%",top:"90%",width:"50px",height:"50px",textDecoration:"none",borderRadius:"50%",backgroundColor:"#0b5ac2",padding:"12px",display:"flex",alignItems:"center",justifyContent:"center"}}><button onClick={scrollToTop} className="fa fa-arrow-up" style={{color:"white",fontSize:"25px"}}></button></div>)} */}

                        {searchResult.map((data: Ileaderboard, i: number) => {
                            const avatarURL =
                                data.avatarUrl === "#"
                                    ? "https://i.stack.imgur.com/YaL3s.jpg"
                                    : data.avatarUrl;
                            return (
                                data.userName != "Rajdip019" && (
                                    <tr
                                        className={`${
                                            i % 2 === 0 &&
                                            "bg-[#DBE0EB] dark:bg-[#17202A]"
                                        } rounded-md`}
                                        key={i}
                                    >
                                        <td
                                            className={`my-2 pl-2 xl:rounded-tl-md rounded-tl-sm xl:rounded-bl-md rounded-bl-sm font-semibold`}
                                        >
                                            {data.position}.
                                        </td>
                                        <td
                                            className={`my-2 flex justify-start items-center xl:space-x-4 space-x-2 w-full`}
                                        >
                                            <img
                                                src={avatarURL}
                                                className="transition-all duration-75 hover:border-solid hover:brightness-75 w-16 rounded-full border-dashed border-2 border-blue-400 text-sm cursor-pointer"
                                                alt=""
                                                onClick={() =>
                                                    window.open(
                                                        `https://github.com/${data.userName}`,
                                                        "_blank"
                                                    )
                                                }
                                            />
                                            <span
                                                onClick={() =>
                                                    window.open(
                                                        `https://github.com/${data.userName}`,
                                                        "_blank"
                                                    )
                                                }
                                                className="max-w-[113px] truncate sm:max-w-fit cursor-pointer hover:underline"
                                            >
                                                {data.userName}
                                            </span>
                                        </td>
                                        <td
                                            className={`my-2 pl-2 font-semibold text-center`}
                                        >
                                            {data.PRCount}
                                        </td>
                                        <td className="my-2 pr-2 xl:rounded-tr-md rounded-tr-sm xl:rounded-br-md rounded-br-sm w-fit">
                                            <div className="flex justify-start items-center space-x-2">
                                                <img
                                                    src="/leaderboardlogo.png"
                                                    alt="leaderboardLogo"
                                                    className="w-8"
                                                />
                                                <span className="float-left">
                                                    {data.Score}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            );
                        })}
                    </tbody>
                </table>
                {searchResult.length == 0 && (
                    <p className="text-center">No results found</p>
                )}
                {showButton && (
                    <FaAngleUp
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
                            color: "white",
                        }}
                        className="icon-position icon-style hover:cursor-pointer hover:-translate-y-2 hover:ease-in-out transition"
                        onClick={scrollToTop}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Leaderboard;

export async function getStaticProps() {
    const res = await fetch(
        "https://hacktoberfest22-leaderboard.herokuapp.com/leaderboard"
    );
    const leaderboardData = await res.json();

    return {
        props: {
            leaderboardData,
        },
        revalidate: 3600,
    };
}
