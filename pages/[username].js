import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../components/Home/LeftSideBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import UserProfile from "../components/userProfile/UserProfile";
import { useRouter } from "next/router";
import Chat from "./chat";
import Messenger from "../components/Chating/messenger";

const Profile = () => {
  const router = useRouter();
  const userName = router.query.username;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/api/user/userName?userName=${userName}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [userName]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-slate-900 pt-2 w-full ">
        <div className="col-span-2  hidden xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <LeftSideBar />
        </div>

        <div className="col-span-12 xl:col-span-10 2xl:col-span-8 sm:col-span-12 h-[91vh] overflow-y-scroll scrollbar	">
          <div className="w-full mx-auto">
            {/* <UserProfile data={data} /> */}
            {/* <Chat data={data}></Chat> */}
            <Messenger data={data}></Messenger>
          </div>
        </div>

        <div className="col-span-2 hidden 2xl:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default Profile;
