import Head from "next/head";
import LeftSideBar from "../components/Home/LeftSideBar";
import MiddleLeftBar from "../components/Home/MiddleLeftBar";
import MiddleRightBar from "../components/Home/MiddleRightBar";
import RightSideBar from "../components/Home/RightSideBar";
import Navigation from "../components/Share/Navigation";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Login from "./login";

export default function Home() {
  const user = useSelector((state) => state.states.user);
  const isLoading = useSelector((state) => state.states.isLoading);

  if (isLoading) {
    return (
      <div className="text-center h-screen flex justify-center items-center">
        <button
          disabled
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <svg
            role="status"
            className="inline mr-3 w-4 h-4 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9184 73.1895 90.9184 50.5908C90.9184 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8424 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8442 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 84.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-neutral-100 dark:bg-gray-900">
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <Navigation />
        <div className="">
          <div className="grid grid-cols-12">
            <div className="col-span-2 hidden lg:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default ">
              <LeftSideBar />
            </div>
            <div className="col-span-12 lg:col-span-8 2xl:col-span-8 w-full md:w-11/12 2xl:w-3/4 mx-auto h-[89vh] overflow-y-scroll scrollbar scroll-ml-5">
              {/* 	scrollbar-hide hover:scrollbar-default */}
              <div className="grid gap-5 grid-cols-12 pr-3">
                <div className="col-span-12 xl:col-span-8 ">
                  <MiddleLeftBar />
                </div>
                <div className="col-span-4 hidden xl:block">
                  <MiddleRightBar />
                </div>
              </div>
            </div>
            <div className="col-span-2 hidden lg:block h-[89vh] overflow-y-scroll scrollbar	scrollbar-hide hover:scrollbar-default pr-2">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
}
