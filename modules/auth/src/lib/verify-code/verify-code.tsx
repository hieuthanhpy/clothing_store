import styles from './verify-code.module.css';
import { Link } from "react-router-dom"

/* eslint-disable-next-line */
export interface VerifyCodeProps {}

export function VerifyCode(props: VerifyCodeProps) {
  return (
    <div className=" bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl absolute font-sans">Insightlancer</p>
          <Link to="/signin">
            <button className="mt-20 ml-4 inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-3 rounded-full h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
            </button>
          </Link>

          <div className="mt-8 text-3xl text-center font-semibold	">
            Verify Code
          </div>
          
          <div className="text-xs relative mt-2 p-2 text-center">
            Please enter the code we just sent to email <a href="#" className="text-yellow-900 font-bold">example@email.com</a>
          </div>

          <div className="mt-4">
            <form>
              <div className="flex justify-center gap-2 mb-6">
                  <input className="w-12 h-8 text-center border rounded-full shadow-sm" type="text" maxlength='1' pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required placeholder="-"></input>
                  <input className="w-12 h-8 text-center border rounded-full shadow-sm" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required placeholder="-"></input>
                  <input className="w-12 h-8 text-center border rounded-full shadow-sm" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required placeholder="-"></input>
                  <input className="w-12 h-8 text-center border rounded-full shadow-sm" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required placeholder="-"></input>
              </div>
              <div className="text-center">
                <p className=" text-yellow-900 dark:text-yellow-900 text-xs relative">Didn't receive OTP?</p>
                <a href="#" className="underline font-medium text-yellow-900 dark:text-yellow-900 text-xs relative ">Resend code</a>
              </div>
              <div className="flex items-center justify-center mt-4">
                  <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                    Verify
                  </button>
              </div>
            </form>
          </div>
          <div className="m-4">
            <Link to="/location">
              <button>
              Go to location
              </button>
            </Link>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default VerifyCode;
