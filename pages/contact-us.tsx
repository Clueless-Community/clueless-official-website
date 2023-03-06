import React from 'react';
import Footer from './components/shared/Footer';
import Head from 'next/head';

function contact_us() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>ClueLess</title>
      </Head>
      <div className="flex flex-wrap justify-center items-center bg-white h-full w-screen px-16 py-16  gap-32 max-[1280px]:gap-8">
        <div className="pt-8 pb-4 px-16 bg-zinc-100 w-1/3 rounded-lg shadow-2xl h-[90%] min-w-[350px] max-[1280px]:h-max">
          <p className="font-medium leading-10 text-4xl text-center mb-4">
            Contact Us
          </p>
          <p className="mb-4 text-xs text-center">
            Have any questions?We’d love to hear from you
          </p>
          <div className="w-full max-w-xs items-center">
            <form className="w-full rounded pt-6 pb-8">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="bg-zinc-200 appearance-none border outline-none rounded-full w-full py-2 px-3 text-gray-700 leading-tight"
                  id="email"
                  type="email"
                  placeholder=""
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="bg-zinc-200 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="desc"
                >
                  How can we help you?
                </label>
                <textarea
                  className="bg-zinc-200 resize-none appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="desc"
                  style={{
                    height: '100px',
                  }}
                  placeholder=""
                />
              </div>
              <div className="w-full text-center ">
                <button
                  className="rounded-full bg-black text-white font-bold py-2 px-8 shadow-lg rounded"
                  type="button"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className=" bg-zinc-300 rounded-lg shadow p-64 max-[766px]:p-40"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact_us;
