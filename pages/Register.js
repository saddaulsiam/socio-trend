import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form';
import useFirebase from '../firebase/useFirebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  



  const [showPass,setShowPass] = React.useState(false)
  const [showPassConfirm,setShowPassConfirm] = React.useState(false)

  const {registerWithEmailPass} = useFirebase()
  const { register, handleSubmit  } = useForm();



  const onSubmit = data =>{
     console.log(data)
      if(data.password === data.confirmPass){
            registerWithEmailPass();
            toast("Wow password matched!");
      }else{
        toast("Oops! password dosen't match");
      }
    };


    const handleHideConfirm =()=>{
    setShowPassConfirm(true);
    }

    const handleShowConfirm =()=>{
      setShowPassConfirm(false);
      }


    const handleHidePass =()=>{
      setShowPass(true);
      }

    const handleShowPass =()=>{
      setShowPass(false);
      }
      
  

  return (
    <>
       <Head>
          <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
              integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
       </Head>
      <div className="flex justify-center m-10 sm:mx-auto md:flex-row flex-col w-5/6">
        <div className="md:w-3/6">
          <Image src="http://uitheme.net/sociala/images/login-bg.jpg" height="600" width="700" alt="register image"/>
          <a className="font-bold text-3xl text-blue-600 absolute top-10 left-10">
            Sociala.
          </a>
        </div>
        <div className="md:w-2/5 w-11/12 mx-auto pt-10">
          <h2 className="md:text-4xl text-3xl text-gray-900 font-bold mb-4">
            Create <br /> your account
          </h2>
          {/* register-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name-field */}
              <input
               {...register("displayName", { required: true })} 
                className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md"
                placeholder="Your Name"
              ></input>
              <input
               {...register("email", { required: true })} 
                className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md mt-5"
                placeholder="Your Email address"
              ></input>

              {/* password-filed */}
              <div className="relative">
                    <input
                    {...register("password", { required: true })} 
                    type={showPass? 'text':'password'}
                      className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md mt-5"
                      placeholder="Password"
                    >
                    </input>
                    <i onClick={showPass? handleShowPass : handleHidePass} className={showPass? 'fa-solid fa-eye-slash absolute right-5 top-10':'fa-solid  fa-eye absolute right-5 top-10'}/>
                   
              </div>



              {/* confirm-password */}
              <div className="relative">
                    <input
                    {...register("confirmPass", { required: true })} 
                    type={showPassConfirm? 'text':'password'}
                      className="w-full border border-gray-400 h-14 py-4 pl-12 rounded-md mt-5"
                      placeholder="Confirm Password"
                    >
                    </input>
                    <i onClick={showPassConfirm? handleShowConfirm : handleHideConfirm} className={showPassConfirm? 'fa-solid fa-eye-slash absolute right-5 top-10':'fa-solid  fa-eye absolute right-5 top-10'}/>
                   
              </div>


              
              <div className="flex py-3">
                <input type="checkbox" className="w-4 h-4 rounded mt-1" />
                <p className="text-gray-400 font-semibold pl-2">
                  Accept Term and Conditions
                </p>
              </div>
              <button type="submit" className="w-full h-14 py-4 rounded-md bg-gray-900 text-white ">
                Register
              </button>
          </form>
          <p className="text-gray-400 py-3 font-semibold">
            Already have account{" "}
            <Link passHref href="/login">
              <a className="text-blue-600">Login</a>
            </Link>
          </p>
        </div>

          {/* react-toast-for-alert */}

          <div>
            <ToastContainer />
         </div>

      </div>
    </>
  );
};

export default Register;
