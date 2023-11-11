import styles from './location.module.css';
import { Link } from "react-router-dom"
/* eslint-disable-next-line */
export interface LocationProps {}

export function Location(props: LocationProps) {
  return (
    <div>
      <div className=" bg-zinc-200 w-full h-screen justify-center flex">

      <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
        <p className="mt-8 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
        
        <div className="mt-28 relative text-center">
          <button className="rounded-full bg-zinc-200 p-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-yellow-900">
              <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="relative mt-2 text-2xl text-center font-semibold	">
          What is Your Location?
        </div>
        
        <div className="text-xs relative mt-2 p-2 text-center">
          We need to know your location in order to suggest <br></br> nearby services.
        </div>

        <div className="relative mt-2 text-center">
          <button className="font-medium bg-yellow-900 hover:bg-yellow-700  text-white py-2 px-4 rounded-full h-12 w-72">
            Allow Location Access
          </button>
        </div>
        <div className="relative mt-4 text-center">
          <a href="/location" className="font-medium  text-yellow-900 py-2 px-4 rounded-full h-12 w-72">
            Enter Location Manually
          </a>
        </div>
        <p className="bottom-28 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
        
      </div>
      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52716.98089610231!2d106.80481731657476!3d10.871394180155397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1698351745711!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe> */}
    </div>
  );
}

export default Location;
