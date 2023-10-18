// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Splash } from 'splash';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
    {/*******************  01 Splash ***********************/}
      <div className="  bg-zinc-200 w-full h-screen justify-center flex">
        
        <div className="overflow-hidden bg-slate-50 w-80 h-screen relative">
          <p className="mt-12 left-6 text-zinc-200 text-3xl relative font-sans">Insightlancer</p>
          <div className="border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-40 h-40 -top-20 left-48"></div>
          <div className="mt-40 relative text-center">
            <div className="top-16 left-12 rounded-full relative mt-4 text-slate-50 bg-yellow-900 w-16 h-16 font-medium font-serif text-4xl">
              <div className="text-center relative top-3">
                f
              </div>
            </div>
            <div className="relative top-3 left-7 font-medium font-serif text-4xl">
              fashion
            </div>
            <div className="relative -top-12 left-24 text-yellow-900 text-6xl">
              .
            </div>
          </div>

          <p className="mt-44 text-zinc-200 left-32 text-3xl relative font-sans">Insightlancer</p>
          <div className="border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-60 h-60 -bottom-20 -left-28"></div>
        </div>
      </div>

    {/*******************  02 Welcome Screen ***********************/}
      <hr></hr>
      <div className="  bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          <div className="z-0 border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-60 h-60 -top-20 -left-32"></div>
          
          <img className="z-10 absolute h-80 w-32 top-20 left-6 rounded-full" src="2.1.jpg" alt="image description"></img>
          <img className="z-0 absolute w-32 h-40 left-40 top-20 rounded-full" src="2.3.png" alt="image description"></img>
          <img className="z-0 absolute w-32 left-40 top-64 rounded-full" src="2.2.jpg" alt="image description"></img>

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
          <div className="relative mt-3 text-center">
            <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-60">
              Let's Get Started
            </button>
          </div>
          <div className="text-center mt-4 text-sm">
            Already have an account? 
            <a href="#" className="underline font-medium text-yellow-900 dark:text-yellow-900"> Read more</a>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          <div className="border-yellow-900 border-2 border-solid rounded-full z-10 absolute w-40 h-40 top-40 -right-20">
            
          </div>
        </div>
      </div>

    {/*******************  03.1 Onboarding Screen ***********************/}
      <hr></hr>
      <div className="  bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <a href="#" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
          <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          
          <img className="z-10 relative h-96 w-80 top-2" src="3.1.png" alt="image description"></img>
          <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
            <div className="font-sans top-2 relative text-3xl font-bold text-center">
              <div className="text-yellow-900 font-sans inline">
                Seamless&nbsp;
              </div>
                Shopping Experience
            </div>
            <div className="top-2 text-xs relative p-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
            </div>
            <div className="top-12 relative text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline w-12 h-12 relative ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full absolute right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-8 relative">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
            
            <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
            
          </div>
        </div>
      </div>

    {/*******************  03.2 Onboarding Screen ***********************/}
      <hr></hr>
      <div className="  bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <a href="#" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
          <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          
          <img className="z-10 relative h-96 w-80 top-2" src="3.2.png" alt="image description"></img>
          <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
            <div className="font-sans top-2 relative text-2xl font-bold text-center">
                Wishlist: Where
              <div className="text-yellow-900 font-sans inline">
                &nbsp;Fashion Dreams&nbsp;
              </div>
                Begin
            </div>
            <div className="top-2 text-xs relative p-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
            </div>
            <div className="top-12 relative text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline w-12 h-12 relative ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full absolute right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-8 relative">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
            
            <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
            
          </div>
        </div>
      </div>

    {/*******************  03.3 Onboarding Screen ***********************/}
      <hr></hr>
      <div className="  bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <a href="#" className=" absolute text-yellow-900 top-4 left-64  font-medium">skip</a>
          <p className="inline-block mt-4 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          
          <img className="z-10 relative h-96 w-80 top-2" src="3.3.png" alt="image description"></img>
          <div className="bg-white top-2 rounded-t-2xl relative w-full h-screen ">
            <div className="font-sans top-2 relative text-3xl font-bold text-center">
              <div className="text-yellow-900 font-sans inline">
                Swift&nbsp;
              </div>
                and
              <div className="text-yellow-900 font-sans inline">
                &nbsp;Reliable
                <br></br>
              </div>
                Delivery
            </div>
            <div className="top-2 text-xs relative p-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt
            </div>
            <div className="top-12 relative text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline w-12 h-12 relative ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full absolute right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-8 relative">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
            
            <p className=" top-32 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
