import Head from "next/head";
import LeftSideBar from "../components/Home/LeftSideBar";
import MiddleLeftBar from "../components/Home/MiddleLeftBar";
import MiddleRightBar from "../components/Home/MiddleRightBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="p-4">
        <div className="grid grid-cols-12">
          <div className="col-span-2 hidden lg:block">
            <LeftSideBar />
          </div>
          <div className="col-span-12 lg:col-span-10 2xl:col-span-8 w-full md:w-3/4 mx-auto">
            <div className="grid gap-5 grid-cols-12">
              <div className="col-span-12 xl:col-span-8 ">
                <MiddleLeftBar />
              </div>
              <div className="col-span-4 hidden xl:block">
                <MiddleRightBar />
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden 2xl:block">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
