import Head from "next/head";
import LeftSideBar from "../components/Home/LeftSideBar";
import MiddleLeftBar from "../components/Home/MiddleLeftBar";
import MiddleRightBar from "../components/Home/MiddleRightBar";
import RightSideBar from "../components/Home/RightSideBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div className="w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <LeftSideBar></LeftSideBar>
          </div>
          <div className="col-span-8 w-4/5 mx-auto">
            <div className="grid gap-5 grid-cols-12">
              <div className="col-span-8">
                <MiddleLeftBar></MiddleLeftBar>
              </div>
              <div className="col-span-4">
                <MiddleRightBar></MiddleRightBar>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}
