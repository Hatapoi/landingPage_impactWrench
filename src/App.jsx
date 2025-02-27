import React from "react";
import impactKuning from "./assets/impactKuning.jpg"
import impactMerah from './assets/impactMerah.jpg'
import impactHitam from './assets/impactHitam.jpeg'
import costumer1 from './assets/costumer1.png'
import costumer2 from './assets/costumer2.png'
import costumer3 from './assets/costumer3.png'
import ongkir from './assets/ongkir.png'
import gratisongkir from './assets/gratisongkir.png'
import { SendHorizontal, Star } from "lucide-react";
import useFacebookPixel from "./hooks/facebookPixelHook";

const App = () => {

  const pixelId = import.meta.env.VITE_FB_PIXEL_ID;

  useFacebookPixel(pixelId);

  return (
    <div className="flex flex-col">
      <img className="h-28 md:h-36 w-full" src={ongkir} alt="..." />
      <div class="flex flex-wrap items-center justify-center bg-red-600 gap-10">
        <div class="w-full h-96 md:w-96 bg-blue-500">
          <img src={impactKuning} alt="..." />
        </div>
        <div class="w-full h-96 md:w-96 bg-slate-500">
          <img src={impactMerah} alt="..." />
        </div>
        <div class="w-full h-96 md:w-96 bg-slate-300">
          <img src={impactHitam} alt="..." />
        </div>
      </div>
      
      <div class="flex items-center justify-center flex-wrap">
        <div class="w-full h-96 md:w-4/12 min-w-96 bg-blue-300 flex flex-col items-center gap-3 overflow-hidden">
          <div className="flex p-3 w-[90%] bg-slate-100 rounded-md">
            <img className="w-12 h-12 m-2 rounded-full" src={costumer1} alt="..." />
            <div>
              <p className="me-auto font-bold text-xl">Rega_priyana</p>
              <div className="flex gap-2">
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
              </div>
              <p>
                Toko bertanggung jawab, barang sampai dengan aman, sesuai dengan deskripsi,  jangan lupa beli di toko ini sangat bagus.
              </p>
            </div>
          </div>
          <div className="flex p-3 w-[90%] bg-slate-100 rounded-md">
            <img className="w-12 h-12 m-2 rounded-full" src={costumer2} alt="..." />
            <div>
              <p className="me-auto font-bold text-xl">Suhendirudi</p>
              <div className="flex gap-2">
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
              </div>
              <p>
                Sangat berguna sekali untuk membuka ban mobil, untuk ngebor tanpa harus di colok listrik terlebih dahulu, semoga awet barangnya
              </p>
            </div>
          </div>
          <div className="flex p-3 w-[90%] bg-slate-100 rounded-md">
            <img className="w-12 h-12 m-2 rounded-full" src={costumer3} alt="..." />
            <div>
              <p className="me-auto font-bold text-xl">firdaus_firdaus</p>
              <div className="flex gap-2">
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
                <i><Star color="#fbff14" strokeWidth={3} /></i>
              </div>
              <p>
                Ayo kita beralih ke Ironhoof belanja di sini seleranya sangat amanah sesuai gambar
              </p>
            </div>
          </div>
        </div>
        <div class="w-full h-96 md:w-4/12 min-w-96 bg-black">
          <div className="flex flex-col text-center text-white text-xl font-semibold gap-2">
            <p>Diluar Negri Harganya 1JT An</p> 
            <p>Ini barang premium, Sangat Mahal!</p>
            <p>Tapi.. Karena Kami Adalah <span className="text-[rgb(0,255,0)] font-bold">Distributor Resmi</span></p>
            <p>Dan Kami <span className="text-[rgb(0,255,0)] font-bold">Impor Langsung</span></p>
            <p>Maka… Kami Kasih Harga Spesial Untuk Anda Sekarang!</p>
            <p className="line-through text-[rgb(0,255,0)] font-bold">Rp. 1.000.000</p>
            <p>Sekarang Menjadi </p> <br />
            <p className="text-[rgb(0,255,0)] text-2xl font-bold">Rp. 599.000 </p>
          </div>
        </div>
        <div class="w-full h-96 md:w-4/12 min-w-96 bg-slate-100 overflow-hidden">
          <img src={gratisongkir} alt="..." />
        </div>
      </div>
      <div className="flex w-full h-auto items-center justify-center">
        <a
          className="p-4 m-20 flex items-center gap-3 bg-[rgb(0,255,0)] text-white font-bold text-xl rounded-md hover:bg-opacity-65"
          href="https://wa.me/6287874000274" 
          target="_blank"
        >
            <SendHorizontal color="#ffffff" />
            BELI SEKARANG
        </a>
      </div>
    </div>
  );
};

export default App;
