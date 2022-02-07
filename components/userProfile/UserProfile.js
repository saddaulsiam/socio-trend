import React from "react";
import Image from "next/image";
import UserSinglePost from "./UserSinglePost";

const UserProfile = () => {
  return (
    <>
      {/* Profile banner */}
      <div className="drop-shadow-sm p-5 bg-white rounded-2xl">
        <div className="">
          <Image
            className="rounded-2xl "
            src="https://i.ibb.co/pWc2Ffd/u-bg.jpg"
            width={1000}
            height={250}
            alt="user cover photo"
          />
        </div>
        <div className="flex justify-between pt-2 pb-5">
          <div className=" flex ">
            <div className="-mt-12 ml-5">
              <Image
                src="https://i.ibb.co/5kdWHNN/user-12.png"
                alt="user profile photo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="ml-6">
              <div className="font-bold text-lg ">Saddaul Siam </div>
              <div className="text-xs font-medium	text-gray-400 ">
                support@gmail.com
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-green-500	text-white font-bold text-xs p-3 rounded-md ">
              Edit profile
            </button>
          </div>
        </div>
        <hr />
        <div className="flex ">
          <p className="pr-8 pt-3 font-semibold">Post</p>
          <p className="pr-8 pt-3 font-semibold">Friends</p>
        </div>
      </div>

      {/* Post and About */}

      <div className="grid grid-cols-12 gap-4 bg-gray-100 pt-3">
        <div className="col-span-4">
          <div className="drop-shadow-sm bg-white p-5 rounded-xl">
            <h2 className="text-lg font-semibold pb-3">About</h2>
            <div className="flex items-center">
              <Image
                src="https://img.icons8.com/emoji/48/000000/graduation-cap-emoji.png"
                alt=""
                height="25"
                width="25"
              />
              <span className="ml-3">
                Went to Haripur Durgadas High School & College
              </span>
            </div>
            <div className="flex items-center py-3">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRoge3XsWvUYBzG8Y9yKIJVEXQoDjd2EVzsJDgIgpubbnVydtM/wdWxq5MgiCCO4mBBKAguLuLiIqIUWpCj2FodLm/PxrSXq7nkZ32/8EzJvXm+5PJ7EzK16ONlkX7HXfbNNazgZ5FVXO+00YQcwl38MJJI2cJ9HO6sXU1O4Ik/Bcp5jtMddRzLBXwwXiLlIy6W1tjt3NZYwGCPIrtlUPw2cQffK86bOkfxYB8C5TzEsWLNS/jUpsg5vG5AIuWN0Yg+gxdtiFzG5wYlUr7ianGNnuGE25qGQBqtm1OQSNnEveJacKNpiRk8nqJAOc9wqmmJObxrUSLlPc43JXET3zqQSBng1t8IpIetK4FyFnFkUomzdo6/KFnCbF2Jqg0pUr7gyjiJ26pfEaJlw3AbSCN6m+N4FKDgpHmKk7+LLBcH1gKUq5vUdZnRB84G3mK+fKsCM2/4frZOxX/M0PJfYEf38J+cdcki0cgi0cgi0eg1vF7VvrQXje1ZB+aOZJFoZJFoZJFoZJFoZJFoZJFoZJFoHGiRpdZbTM6rrgtk/ht+AZJi8ybhOtGyAAAAAElFTkSuQmCC"
                alt=""
                height="25"
                width="25"
              />
              <span className="ml-3">Lives in Pabna Dhaka Bangladesh</span>
            </div>
            <div className="flex items-center py-3">
              <Image
                src="https://img.icons8.com/material-sharp/48/000000/marker.png"
                alt=""
                height="25"
                width="25"
              />
              <span className="ml-3">From Pabna Dhaka Bangladesh</span>
            </div>
            <div className="flex items-center py-3">
              <Image
                src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"
                alt=""
                height="25"
                width="25"
              />
              <span className="ml-3">Single</span>
            </div>
            <div className="flex items-center py-3">
              <Image
                src="https://img.icons8.com/ios-filled/50/000000/clock--v1.png"
                alt=""
                height="25"
                width="25"
              />
              <span className="ml-3">Joined April 2017</span>
            </div>
            <button className="w-full bg-gray-200 font-semibold rounded-md text-gray-700 mt-3 py-2">
              Edit Details
            </button>
          </div>
        </div>

        <div className="col-span-8">
          {/* create post */}
          <div className="drop-shadow-sm bg-white p-5 rounded-xl">
            <div className="">
              <div className="flex items-center">
                <Image
                  src="https://img.icons8.com/office/40/000000/create-new.png"
                  alt=""
                  height="30"
                  width="30"
                />
                <span className="pl-3 font-semibold">Create Post</span>
              </div>
              <div className="mt-5 border-2 rounded-xl p-2 flex">
                <div>
                  <Image
                    src="https://i.ibb.co/5kdWHNN/user-12.png"
                    alt="user profile photo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <textarea
                    name=""
                    id=""
                    cols="80"
                    rows="4"
                    placeholder="What's on your mind"
                    className="focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div className="mt-5">
                <input
                  type="file"
                  text="Photo"
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
                />
              </div>
            </div>
          </div>
          <UserSinglePost />
          <UserSinglePost />
          <UserSinglePost />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
