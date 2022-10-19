/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Swags = () => {
	return (
		<div className="md:grid lg:grid-cols-2 md:mx-40 mx-10 mt-10 flex flex-col lg:text-left sm:mb-32">
			<div className="bg-blue-900 lg:rounded-l-3xl md:rounded-t-3xl lg:rounded-tr-none rounded-t-3xl py-20 transition-all duration-500 relative">
				<div className="xl:px-16 md:px-10 sm:px-8 px-4 flex flex-col items-start w-11/12 mx-auto my-auto">
					<h2 className="font-semibold xl:text-4xl lg:text-3xl text-2xl text-white ease-in-out transition-all duration-1000">
						How to win Swags❓✨
					</h2>
					<p className="text-gray-200 mt-8 sm:text-base text-sm">
						If your PR gets merged successfully, you can earn points and have a
						chance to win awesome Swags! Make sure to follow the steps below
						carefully so that we can track your profile and progress.
					</p>
					<ol className="text-gray-200 list-decimal mt-4 ml-4 sm:text-base text-sm">
						<li>Star the Repo that you contributed to.</li>
						<li>
							Sign in to your Clueless account. If you dont have one, Sign up
							for free at{" "}
							<a
								className="text-blue-400 font-bold"
								href="https://www.clueless.tech/"
							>
								clueless.tech
							</a>
						</li>
						<li>
							Go to your profile page from the menu and copy your profile URL
							from your browser&apos;s address bar.
						</li>
						<li>
							Go back to your PR and comment your profile URL tagging the person
							who merged your PR.
						</li>
						<li>You&apos;re all set!</li>
					</ol>
					<Link href="https://www.linkedin.com/feed/update/urn:li:activity:6982151802993414144/">
						<a target="_blank">
							<button className="btn-blue bg-white text-black hover:bg-gray-100 mt-10 flex items-center mx-auto lg:mx-0">
								Read More
							</button>
						</a>
					</Link>
				</div>
			</div>
			<div className="bg-[#F2F2F2] lg:rounded-r-3xl md:rounded-b-3xl lg:rounded-bl-none rounded-b-3xl py-20 relative">
				<div className="flex flex-col justify-center h-full">
					<img
						src="/contribute.png"
						alt="swag guidelines img"
						className="mx-auto w-100 md:w-110"
					/>
				</div>
			</div>
		</div>
	);
};

export default Swags;
