import styles from './create-account.module.css';

/* eslint-disable-next-line */
export interface CreateAccountProps {}

export function CreateAccount(props: CreateAccountProps) {
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
  return (
    <div className=" bg-zinc-200 w-full h-screen justify-center flex">

        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <p className="mt-4 mb-8 text-zinc-200 left-6 text-3xl absolute font-sans">Insightlancer</p>
          
          <div className="mt-8 text-3xl text-center font-semibold	">
            Create Account
          </div>
          
          <div className="text-xs relative mt-2 p-2 text-center">
            Fill your Information below or register<br></br> with your social account.
          </div>
          <form>
            <div className="m-4 relative">
              <label>Name</label>
              <input required type="name" id="name" className=" mt-1 mb-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Name..." ></input>
              <label>Email</label>
              <input required type="email" id="email" className="mt-1 mb-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Email..." ></input>
              <label>Password</label>
              <input required type="password" id="password" className="mt-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Password..." ></input>
              <button type="button" onClick={togglePassword} id="btn__password--on" className="hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" absolute top-52 left-60 -mt-2 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button type="button" onClick={togglePassword} id="btn__password--off" className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-52 left-60 -mt-2 ml-2 w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </button>
            </div>
            <div className="ml-4 mr-4 mb-2 relative">
              <input required  type="checkbox" className="w-4 h-4 accent-yellow-900"></input>
              <label className="ml-2 text-sm font-medium text-gray-900">Agree with</label>
              <a href="/sign_up" className="ml-2 text-sm font-medium text-yellow-900 underline">Terms & Condition</a>
            </div>
            
            <div className="relative mt-3 text-center">
              <button type="submit" className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                Sign Up
              </button>
            </div>
          </form>
          <div className=" inline-flex items-center justify-center w-full">
            <hr className="w-64 h-0.5 my-8 bg-gray-200 border-0 rounded dark:bg-zinc-200"></hr>
              <div className="text-yellow-900 font-semibold text-xs absolute px-4 -translate-x-1/2 bg-slate-50 left-1/2">
                Or sign up with
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
            Already have an account? &nbsp;
            <a href="/sign_in" className="underline font-medium text-yellow-900 dark:text-yellow-900">Sign In</a>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default CreateAccount;
