import styles from './create-account.module.css';

/* eslint-disable-next-line */
export interface CreateAccountProps {}

export function CreateAccount(props: CreateAccountProps) {
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

          <div className="m-4">
            <label>Name</label>
            <input type="name" id="name" className=" mt-1 mb-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Name..." ></input>
            <label>Email</label>
            <input type="email" id="email" className="mt-1 mb-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Email..." ></input>
            <label>Password</label>
            <input type="password" id="password" className="mt-1 border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Password..." ></input>
          </div>
          <div className="ml-4 mr-4 mb-2 relative">
            <input type="checkbox" className="w-4 h-4 accent-yellow-900"></input>
            <label className="ml-2 text-sm font-medium text-gray-900">Agree with</label>
            <a href="/signup" className="ml-2 text-sm font-medium text-yellow-900 underline">Terms & Condition</a>
          </div>
          
            <div className="relative mt-3 text-center">
              <button className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                Sign Up
              </button>
            </div>
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
            <a href="/signin" className="underline font-medium text-yellow-900 dark:text-yellow-900">Sign In</a>
          </div>
          <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default CreateAccount;
