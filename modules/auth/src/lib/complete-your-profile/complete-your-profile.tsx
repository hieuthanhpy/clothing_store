import styles from './complete-your-profile.module.css';
import { Link } from "react-router-dom"

/* eslint-disable-next-line */
export interface CompleteYourProfileProps {}

export function CompleteYourProfile(props: CompleteYourProfileProps) {
  function previewFile() {
    const preview = document.querySelector<HTMLImageElement>("img");
    const fileInput = document.querySelector<HTMLInputElement>("input[type=file]");
    const fileOutput = document.querySelector<HTMLDivElement>("#old_avatar");
    const file = fileInput?.files?.[0];
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // Chuyển đổi tệp hình ảnh thành chuỗi base64
        if (preview) {
          preview.src = reader.result as string;
          preview.className="relative bg-zinc-200 rounded-full text-center w-24 h-24 left-28 top-2";
          if (fileOutput.className!= "hidden")
            fileOutput.className="hidden";
        }
      },
      false,
    );
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    
    <div className=" bg-zinc-200 w-full h-screen justify-center flex">
        
        <div className="overflow-hidden  bg-slate-50 w-80 h-full relative ">
          <Link to="/verify_code">
            <button className="mt-4 ml-4 inline-block text-2xl relative border-yellow-900 border-2 bg-slate-50 py-2 px-3 rounded-full h-12 w-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
            </button>
          </Link>
          <p className="mt-4 mb-8 text-zinc-200 left-6 text-3xl relative font-sans">Insightlancer</p>
          <div className="-mt-8 text-3xl text-center font-semibold	">
            Complete Your Profile 
          </div>
          <div className="text-xs relative mt-2 p-2 text-center">
            Don't worry, only you can see your personal data. No one else will be able to see it.
          </div>
          <div id="old_avatar" className="relative bg-zinc-200 rounded-full text-center w-24 h-24 left-28 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="top-7 left-7 relative w-10 h-10 text-zinc-600">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
            </svg>
          </div>
          <img src="" alt="khong co anh" className="relative bg-zinc-200 rounded-full text-center w-24 h-24 left-28 top-2 hidden" ></img>
            <label for="js-imageUpload">  
              <div className="relative left-44 -top-4 ml-2 bg-yellow-900 rounded-full h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white relative top-1 left-1  w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <input onChange={previewFile} type="file" id="js-imageUpload" className="hidden" />
            </label>
          <form className="relative">
            <div className="m-4 relative">
              <label>Name</label>
              <input type="text" id="name" className="border-yellow-900 border-2 bg-slate-50 py-2 px-4 rounded-full h-12 w-72" placeholder="Name..." required></input>
              <label>Phone</label>
              <br></br>
              <div className="border-yellow-900 border-2 bg-slate-50 rounded-full h-12 w-72">
                <select id="phone" name="phone_number" className="text-sm rounded-r-lg rounded-full bg-slate-50 focus:outline-none top-2.5 left-1 relative h-6 w-16 border-r-zinc-200 border-2 border-slate-50" required>
                  <option value="1">+1</option>
                  <option value="7">+7</option>
                  <option value="20">+20</option>
                  <option value="27">+27</option>
                  <option value="30">+30</option>
                  <option value="31">+31</option>
                  <option value="32">+32</option>
                  <option value="33">+33</option>
                  <option value="34">+34</option>
                  <option value="36">+36</option>
                  <option value="39">+39</option>
                  <option value="40">+40</option>
                  <option value="41">+41</option>
                  <option value="43">+43</option>
                  <option value="44">+44</option>
                  <option value="45">+45</option>
                  <option value="46">+46</option>
                  <option value="47">+47</option>
                  <option value="48">+48</option>
                  <option value="49">+49</option>
                  <option value="51">+51</option>
                  <option value="52">+52</option>
                  <option value="53">+53</option>
                  <option value="54">+54</option>
                  <option value="55">+55</option>
                  <option value="56">+56</option>
                  <option value="">+57</option>
                  <option value="">+58</option>
                  <option value="">+60</option>
                  <option value="">+61</option>
                  <option value="">+62</option>
                  <option value="">+63</option>
                  <option value="">+64</option>
                  <option value="">+65</option>
                  <option value="">+66</option>
                  <option value="">+76, +77</option>
                  <option value="">+81</option>
                  <option value="">+82</option>
                  <option value="">+84</option>
                  <option value="">+86</option>
                  <option value="">+90</option>
                  <option value="">+91</option>
                  <option value="">+92</option>
                  <option value="">+92</option>
                  <option value="">+93</option>
                  <option value="">+94</option>
                  <option value="">+95</option>
                  <option value="">+98</option>
                  <option value="">+212</option>
                  <option value="">+213</option>
                  <option value="">+216</option>
                  <option value="">+218</option>
                  <option value="">+220</option>
                  <option value="">+221</option>
                  <option value="">+222</option>
                  <option value="">+223</option>
                  <option value="">+224</option>
                  <option value="">+225</option>
                  <option value="">+226</option>
                  <option value="">+227</option>
                  <option value="">+228</option>
                  <option value="">+229</option>
                  <option value="">+230</option>
                  <option value="">+231</option>
                  <option value="">+232</option>
                  <option value="">+233</option>
                  <option value="">+234</option>
                  <option value="">+235</option>
                  <option value="">+236</option>
                  <option value="">+237</option>
                  <option value="">+238</option>
                  <option value="">+239</option>
                  <option value="">+240</option>
                  <option value="">+241</option>
                  <option value="">+242</option>
                  <option value="">+243</option>
                  <option value="">+244</option>
                  <option value="">+245</option>
                  <option value="">+246</option>
                  <option value="">+247</option>
                  <option value="">+248</option>
                  <option value="">+249</option>
                  <option value="">+250</option>
                  <option value="">+251</option>
                  <option value="">+252</option>
                  <option value="">+253</option>
                  <option value="">+254</option>
                  <option value="">+255</option>
                  <option value="">+256</option>
                  <option value="">+257</option>
                  <option value="">+258</option>
                  <option value="">+260</option>
                  <option value="">+261</option>
                  <option value="">+262</option>
                  <option value="">+263</option>
                  <option value="">+264</option>
                  <option value="">+265</option>
                  <option value="">+266</option>
                  <option value="">+267</option>
                  <option value="">+268</option>
                  <option value="">+269</option>
                  <option value="">+297</option>
                  <option value="">+298</option>
                  <option value="">+299</option>
                  <option value="">+350</option>
                  <option value="">+351</option>
                  <option value="">+352</option>
                  <option value="">+353</option>
                  <option value="">+354</option>
                  <option value="">+355</option>
                  <option value="">+356</option>
                  <option value="">+357</option>
                  <option value="">+358</option>
                  <option value="">+359</option>
                  <option value="">+370</option>
                  <option value="">+371</option>
                  <option value="">+372</option>
                  <option value="">+373</option>
                  <option value="">+374</option>
                  <option value="">+375</option>
                  <option value="">+376</option>
                  <option value="">+377</option>
                  <option value="">+378</option>
                  <option value="">+380</option>
                  <option value="">+381</option>
                  <option value="">+385</option>
                  <option value="">+386</option>
                  <option value="">+387</option>
                  <option value="">+389</option>
                  <option value="">+420</option>
                  <option value="">+421</option>
                  <option value="">+423</option>
                  <option value="">+442</option>
                  <option value="">+500</option>
                  <option value="">+501</option>
                  <option value="">+502</option>
                  <option value="">+503</option>
                  <option value="">+504</option>
                  <option value="">+506</option>
                  <option value="">+507</option>
                  <option value="">+509</option>
                  <option value="">+590</option>
                  <option value="">+591</option>
                  <option value="">+592</option>
                  <option value="">+593</option>
                  <option value="">+594</option>
                  <option value="">+595</option>
                  <option value="">+596</option>
                  <option value="">+597</option>
                  <option value="">+598</option>
                  <option value="">+599</option>
                  <option value="">+673</option>
                  <option value="">+675</option>
                  <option value="">+676</option>
                  <option value="">+677</option>
                  <option value="">+678</option>
                  <option value="">+679</option>
                  <option value="">+680</option>
                  <option value="">+682</option>
                  <option value="">+684</option>
                  <option value="">+685</option>
                  <option value="">+687</option>
                  <option value="">+688</option>
                  <option value="">+689</option>
                  <option value="">+692</option>
                  <option value="">+808</option>
                  <option value="">+850</option>
                  <option value="">+852</option>
                  <option value="">+853</option>
                  <option value="">+855</option>
                  <option value="">+856</option>
                  <option value="">+880</option>
                  <option value="">+886</option>
                  <option value="">+960</option>
                  <option value="">+961</option>
                  <option value="">+962</option>
                  <option value="">+963</option>
                  <option value="">+964</option>
                  <option value="">+965</option>
                  <option value="">+966</option>
                  <option value="">+967</option>
                  <option value="">+968</option>
                  <option value="">+971</option>
                  <option value="">+972</option>
                  <option value="">+973</option>
                  <option value="">+974</option>
                  <option value="">+975</option>
                  <option value="">+976</option>
                  <option value="">+977</option>
                  <option value="">+992</option>
                  <option value="">+993</option>
                  <option value="">+994</option>
                  <option value="">+995</option>
                  <option value="">+996</option>
                  <option value="">+998</option>
                  <option value="">+1264</option>
                  <option value="">+1268</option>
                  <option value="">+1284</option>
                  <option value="">+1340</option>
                  <option value="">+1345</option>
                  <option value="">+1649</option>
                  <option value="">+1664</option>
                  <option value="">+1670</option>
                  <option value="">+1671</option>
                  <option value="">+1758</option>
                  <option value="">+1767</option>
                  <option value="">+1784</option>
                  <option value="">+1787, +1939</option>
                  <option value="">+1809, +1829, +1849</option>
                  <option value="">+1868</option>
                  <option value="">+1869</option>
                  <option value="">+1876</option>
                </select>
                <input type="text" id="phone" pattern="[1-9]{1}[0-9]{8,9}" title="1->9{1}, 0->9{8,9}" className="bg-slate-50 focus:outline-none absolute rounded-l-lg border-slate-50 border-2 -ml-1 rounded-full h-10 w-50 mt-0.5 left-20 border-l-slate-50" placeholder="Enter Phone Number" required></input>
              </div>
              <label>Gender</label>
              <select id="gender" name="gender" className="border-yellow-900 border-2 bg-slate-50 py-2 px-2 rounded-full h-12 w-72" required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              
            </div>

            <div className="relative mt-3 text-center">
              <button type="submit" className=" bg-yellow-900 hover:bg-yellow-700 text-white py-2 px-4 rounded-full h-12 w-72">
                  Complete Profile
              </button>
            </div>
          </form>
          <p className="bottom-20 text-zinc-200 left-32 text-3xl absolute ">Insightlancer</p>
          
        </div>
      </div>
  );
}

export default CompleteYourProfile;
