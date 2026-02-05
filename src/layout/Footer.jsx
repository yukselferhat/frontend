import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline, MdPhoneInTalk } from "react-icons/md";

const Footer = () => {

    const url = `https://wa.me/905550537973?text=${encodeURIComponent('Merhaba, mobilya montajı hakkında bilgi almak istiyorum.')}`;

    return (

        <footer className="w-full bg-slate-900 text-slate-300">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between p-8 lg:p-16 gap-12">
                
                <div className="w-full lg:w-1/4 space-y-5 text-center sm:text-left">

                    <h2 className="text-2xl font-black text-white tracking-tighter italic">FERHAT<span className="text-red-500 underline decoration-2 underline-offset-4">YUKSEL</span></h2>
                    <p className="text-sm leading-relaxed text-slate-400">Mobilyalarınızın ömrünü profesyonel montaj ile uzatıyoruz. 10+ yıllık tecrübe ve garantili işçilik.</p>

                    <div className="flex flex-col gap-3 pt-2">

                        <div className="flex items-center justify-center sm:justify-start gap-3">

                            <MdPhoneInTalk className="text-red-500" />
                            <a href="tel:+905550537973" className="text-sm font-semibold text-slate-200 cursor-pointer">+90 555 053 79 73</a>

                        </div>

                        <div className="flex items-center justify-center sm:justify-start gap-3">

                            <MdOutlineMailOutline className="text-red-500" />
                            <a href="mailto:yukselferhat35@gmail.com" className="text-sm text-slate-200 cursor-pointer">yukselferhat35@gmail.com</a>

                        </div>

                    </div>

                </div>

                <div className="w-full lg:w-2/4 grid grid-cols-2 sm:grid-cols-2 gap-8">

                    <div className="text-left">

                        <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6 border-l-4 border-red-500 pl-3">Hizmetlerimiz</h3>

                        <ul className="space-y-4 text-sm">

                            <li><a href="/" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Dolap Montajı</a></li>
                            <li><a href="/" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Koltuk & Kanepe</a></li>
                            <li><a href="/" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Ofis Kurulumu</a></li>
                            <li><a href="/" className="hover:text-red-400 transition-colors duration-300 flex items-center gap-2">Mutfak Tezgahı</a></li>

                        </ul>

                    </div>

                    <div className="text-left">

                        <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6 border-l-4 border-red-500 pl-3">Kurumsal</h3>

                        <ul className="space-y-4 text-sm">

                            <li><a href="/about" className="hover:text-red-400 transition-colors duration-300">Hakkımızda</a></li>
                            <li><a href="/sss" className="hover:text-red-400 transition-colors duration-300">Sıkça Sorulan Sorular</a></li>
                            <li><a href="/" className="hover:text-red-400 transition-colors duration-300">Gizlilik Politikası</a></li>
                            <li><a href="/contact" className="hover:text-red-400 transition-colors duration-300">İletişim</a></li>

                        </ul>

                    </div>

                </div>

                <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-6">

                    <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-2">Bizi <span className="text-red-500">Sosyal Medyada</span> Takip Edin</h3>

                    <div className="flex gap-3">

                        <a href='https://www.instagram.com/ankara06mobilyamontaj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className={`p-3 rounded-lg bg-slate-800 text-white transition-all duration-300 shadow-xl hover:bg-instagram hover:-translate-y-1`} ><FaInstagram size={20} /></a>
                        <a href={url} className={`p-3 rounded-lg bg-slate-800 text-white transition-all duration-300 shadow-xl hover:bg-green-500 hover:-translate-y-1`} ><FaWhatsapp size={20} /></a>

                    </div>

                    <div className="mt-4 text-center lg:text-right">

                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">7/24 Teknik Destek Hattı</p>
                        <p className="text-red-500 font-mono font-bold">FERHAT-YUKSEL-2026</p>

                    </div>

                </div>

            </div>

            <div className="w-full border-t border-slate-800 py-6 px-8 text-center">

                <p className="text-xs text-slate-500">

                    &copy; {new Date().getFullYear()} <span className="text-slate-300">Usta Montaj</span>. Tüm hakları saklıdır. Tasarım Semih Cingitaş tarafından geliştirilmiştir.
                </p>

            </div>

        </footer>

    );
};


export default Footer;
