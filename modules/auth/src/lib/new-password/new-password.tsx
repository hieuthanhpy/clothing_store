import styles from './new-password.module.css';
import { Link } from "react-router-dom"

/* eslint-disable-next-line */
export interface NewPasswordProps {}

export function NewPassword(props: NewPasswordProps) {
  function togglePassword() {
    const passwordInput = document.querySelector<HTMLInputElement>('#password');
    const passwordon = document.querySelector<HTMLButtonElement>('#btn__password--on');
    const passwordoff = document.querySelector<HTMLButtonElement>('#btn__password--off');

    if ((passwordInput.value !== "") || (passwordoff.className=="hidden")) {
      
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordon.className="inline-block";
        passwordoff.className="hidden";
      } else {
        passwordInput.type = "password";
        passwordon.className="hidden";
        passwordoff.className="inline-block";
      }
    }
  }
  function toggleConfirmPassword() {
    const passwordInput = document.querySelector<HTMLInputElement>('#confirm_password');
    const passwordon = document.querySelector<HTMLButtonElement>('#btn__confirm_password--on');
    const passwordoff = document.querySelector<HTMLButtonElement>('#btn__confirm_password--off');

    if ((passwordInput.value !== "") || (passwordoff.className=="hidden")) {
      
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordon.className="inline-block";
        passwordoff.className="hidden";
      } else {
        passwordInput.type = "password";
        passwordon.className="hidden";
        passwordoff.className="inline-block";
      }
    }
  }
  return (
    
    <div className=" bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          <Link to="/verify_code">
            <button className="mb-8 -mt-4 ml-4 inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-3 rounded-full h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
            </button>
          </Link>
          <div className="-mt-8 text-3xl text-center font-semibold	">
            New Password
          </div>
          
          <div className="mb-4 text-xs relative mt-2 p-2 text-center">
            Your new password must be different from previously used passwords.
          </div>
          <form>
            <div className="m-4 relative">
              <label>Password</label>
              <input type="password" id="password" className="mb-4 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Password..." required></input>
              <label>Confirm Password</label>
              <input type="password" id="confirm_password" className="mb-4 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Password..." required></input>
              <button type="button" onClick={togglePassword} id="btn__password--on" className="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" absolute top-10 left-60 -mt-1 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button type="button" onClick={togglePassword} id="btn__password--off" className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-10 left-60 -mt-1 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
              <button type="button" onClick={toggleConfirmPassword} id="btn__confirm_password--on" className="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" absolute top-32 left-60 -mt-0.5 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button type="button" onClick={toggleConfirmPassword} id="btn__confirm_password--off" className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-32 left-60 -mt-0.5 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
              {/* absolute top-32 left-60 -mt-0.5 ml-2 w-6 h-6 */}
            </div>
            <div className="relative mt-3 text-center">
              <button type="submit" className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                  Create New Password
              </button>
            </div>
          </form>
          
          <p className="bottom-20 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default NewPassword;
