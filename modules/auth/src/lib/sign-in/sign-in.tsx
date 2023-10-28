import styles from './sign-in.module.css';
import { Link } from "react-router-dom"

/* eslint-disable-next-line */
export interface SignInProps {}

export function SignIn(props: SignInProps) {
  return (
    
    <div className=" bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          
          <div className="-mt-8 text-3xl text-center font-semibold	">
            Sign In
          </div>
          
          <div className="text-xs relative mt-2 p-2 text-center">
            Hi Welcome back, you've been missed
          </div>

          <div className="m-4">
            <label>Email</label>
            <input type="email" id="email" className="border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Email..." ></input>
            <label>Password</label>
            <input type="password" id="password" className="border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Password..." ></input>
          </div>

          <a href="/signin" className="underline font-medium text-yellow-900 dark:text-yellow-900 text-xs relative -right-52">Forgot Password?</a>
          <Link to ="/verifycode" >
            <div className="relative mt-3 text-center">
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                Sign In
              </button>
            </div>
          </Link>
          <div className="mt-4 inline-flex items-center justify-center w-full">
            <hr className="w-64 h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-zinc-200"></hr>
              <div className="text-yellow-900 font-semibold text-xs absolute px-4 -translate-x-1/2 bg-slate-50 left-1/2">
                Or sign in with
              </div>
          </div>
          <div className="relative m-4 text-center mb-8">
            <button className="mr-4 inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-14 w-14">
              <div className="text-red-600 relative font-bold">A</div>
            </button>
            <button className="inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-14 w-14">
              <div className="text-green-600 relative font-bold">B</div>
            </button>
            <button className="ml-4 inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-14 w-14">
              <div className="text-blue-600 relative font-bold">C</div>
            </button>
          </div>
          <div className="text-center mt-4 text-sm">
            Don't have an account? &nbsp;
            <a href="/signup" className="underline font-medium text-yellow-900 dark:text-yellow-900">Sign Up</a>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default SignIn;
