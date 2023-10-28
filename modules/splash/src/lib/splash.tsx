/* eslint-disable-next-line */
export interface SplashProps {}
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);
  return (
    <div 
    className=" bg-zinc-200 w-full h-screen justify-center flex">
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
  );
}

export default Splash;
