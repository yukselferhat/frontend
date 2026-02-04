import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { PiShieldCheckLight, PiHammerLight, PiTruckLight, PiUsersThreeLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const AboutPage = () => {

    const [modal, setModal] = useState(false);

    const stats = [

        { icon: <PiHammerLight size={32} />, value: "15.000+", label: "Başarılı Montaj" },
        { icon: <PiUsersThreeLight size={32} />, value: "8.000+", label: "Mutlu Müşteri" },
        { icon: <PiTruckLight size={32} />, value: "Hızlı", label: "Servis Ağı" },
        { icon: <PiShieldCheckLight size={32} />, value: "%100", label: "İşçilik Garantisi" },
    ];

    return (

        <div className="bg-white">

            <div className="relative h-[450px] flex items-center justify-center overflow-hidden">

                <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=2070" alt="Furniture Assembly" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"/>

                <div className="relative z-10 text-center px-4">

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter italic">BİZİM HİKAYEMİZ</h1>
                    <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">"Evinizdeki her parçayı, kendi evimizdeki gibi özenle birleştiriyoruz."</p>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div>

                        <span className="text-red-600 font-black tracking-widest uppercase text-xs border-l-4 border-red-600 pl-3">Biz Kimiz?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4 mb-6 leading-tight">Profesyonel Montajda 10 Yıllık Güven</h2>

                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">

                            <p>2014 yılında bireysel bir girişim olarak başlayan yolculuğumuz, bugün Konya genelinde binlerce haneye ve ofise ulaşan profesyonel bir teknik ekibe dönüştü. Karmaşık kurulum kılavuzlarını sizin için birer konfora dönüştürüyoruz.</p>
                            <p><strong>Garantili İşçilik:</strong> Yapılan her montaj işlemi, ekibimizin imzasını taşır. Sadece kurmuyor, mobilyalarınızın en uzun ömürlü olacağı şekilde stabilizasyonunu sağlıyoruz.</p>
                            <p><strong>Hız ve Titizlik:</strong> Zamanınızın değerli olduğunu biliyoruz. Randevu saatine sadık kalarak, evinizi kirletmeden ve en sessiz şekilde kurulumu tamamlıyoruz.</p>

                        </div>

                    </div>

                    <div className="relative">

                        <img src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=1770" className="rounded-[2.5rem] shadow-2xl z-10 relative object-cover h-[500px] w-full" alt="Professional Carpenter"/>
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-50 rounded-[2.5rem] -z-0"></div>

                    </div>

                </div>

            </div>

            <div className="bg-slate-900 py-20">

                <div className="max-w-6xl mx-auto px-4">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                        {stats.map((stat, index) => ( <div key={index} className="text-center group">

                            <div className="text-red-500 flex justify-center mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                            <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>

                        </div> ))}

                    </div>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-4 py-24 text-center">

                <h2 className="text-3xl font-black text-slate-800 mb-16 inline-block border-b-4 border-red-600 pb-2 italic">DEĞERLERİMİZ</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {[
                        { title: "Müşteri Odaklılık", desc: "Her kurulum sonrası müşteri onayı almadan işimizi tamamlanmış saymıyoruz." },
                        { title: "Güvenlik", desc: "Ağır mobilyaları deprem güvenliği için mutlaka duvara sabitliyoruz." },
                        { title: "Şeffaf Fiyat", desc: "Telefonda ne konuştuysak kapıda onu ödersiniz, sürpriz maliyetlerle karşılaşmazsınız." }
                    ].map((val, i) => (
                        <div key={i} className="p-10 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 border border-slate-100">
                            <h3 className="text-xl font-bold mb-4 text-red-600 uppercase tracking-tighter">{val.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                        </div>
                    ))}

                </div>

            </div>

            <div className='max-w-6xl mx-auto pb-20'>

                <h2 className='text-3xl text-center font-black text-slate-800 mb-10 italic uppercase'>USTALARIMIZ</h2>

                <div className='flex justify-center'>

                    <div className='group relative w-24 h-24 p-1.5 bg-red-600 rounded-full cursor-pointer shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-110 overflow-hidden' onClick={() => setModal(true)}>

                        <img src='https://web.whatsapp.com/9115b5ce-7e10-407f-bca4-738dd375f002' alt="Usta" className='w-full h-full object-cover rounded-full group-hover:opacity-80' onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Semih+Cingitas&background=2563eb&color=fff' }}/>

                    </div>

                </div>

                {modal && ( <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                    <div onClick={() => setModal(false)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"></div>

                    <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100">

                        <button onClick={() => setModal(false)} className="absolute right-6 top-6 text-slate-400 hover:text-red-600 transition-colors"><IoClose size={28} /></button>
                            
                        <div className="flex flex-col items-center text-center">

                            <div className="w-24 h-24 bg-red-600 rounded-full mb-4 p-1 shadow-xl">

                                <img src='blob:https://web.whatsapp.com/9115b5ce-7e10-407f-bca4-738dd375f002' alt="Semih" className='rounded-full w-full h-full object-cover border-4 border-white' />

                            </div>

                            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Semih Cingitaş</h1>

                            <p className="text-red-600 font-bold text-sm bg-red-50 px-4 py-1 rounded-full mt-2 uppercase tracking-widest">Baş Usta & Kurucu</p>

                            <div className="my-8 text-left w-full bg-slate-50 p-6 rounded-2xl border border-slate-100">

                                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Ustalık Hikayem</h2>
                                <p className="text-slate-600 text-sm italic leading-relaxed">"Teknik becerilerimi yazılım dünyasıyla birleştirerek, mobilya montaj hizmetini daha erişilebilir ve profesyonel bir hale getirmeyi hedefledim. Her iş, bir referanstır."</p>

                            </div>

                            <div className="flex gap-4 w-full">

                                <a href="#" className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 flex justify-center"><CiFacebook size={28} /></a>
                                <a href="#" className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 flex justify-center"><CiInstagram size={28} /></a>
                                <a href="#" className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 flex justify-center"><CiTwitter size={28} /></a>

                            </div>

                        </div>

                    </div>

                </div> )}

            </div>

        </div>

    );
};

export default AboutPage;