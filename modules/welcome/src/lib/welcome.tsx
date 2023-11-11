import styles from './welcome.module.css';
/* eslint-disable-next-line */
export interface WelcomeProps {}
import { Link } from "react-router-dom"

export function Welcome() {
  return (
    <div 
    className=" bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          <div className="z-0 border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-60 h-60 -top-20 -left-32"></div>
          
          <img className="z-10 absolute h-80 w-32 top-20 left-6 rounded-full" src="./src/assets/images/welcome-1.jpg" alt="image description"></img>
          <img className="z-0 absolute w-32 h-40 left-40 top-20 rounded-full" src="./src/assets/images/welcome-2.png" alt="image description"></img>
          <img className="z-0 absolute w-32 left-40 top-64 rounded-full" src="./src/assets/images/welcome-3.jpg" alt="image description"></img>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 relative top-64 left-4 z-20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
          </svg>
          <div className="font-sans mt-80 relative text-2xl font-bold text-center">
            The 
            <div className="text-yellow-900 font-sans inline">
            &nbsp;Fashion App&nbsp;
            </div>
            That Makes You Look Your Best
          </div>
          <div className="text-xs relative mt-2 p-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
          </div>
          <Link to="/screen">
            <div className="relative mt-3 text-center">
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                Let's Get Started
              </button>
            </div>
          </Link>
          <div className="text-center mt-4 text-sm">
            Already have an account? &nbsp;
            <a href="/sign_in" className="underline font-medium text-yellow-900 dark:text-yellow-900">Sign In</a>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          <div className="border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-40 h-40 top-40 -right-20">
            
          </div>
        </div>
      </div>
  );
}

export default Welcome;
