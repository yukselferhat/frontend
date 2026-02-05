import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Hammer, Sofa, Layout, ShieldCheck, Clock, Send, CheckCircle } from 'lucide-react';

const Home = () => {

    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Dolap Montajı', message: '' });

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const serviceID = 'service_vfn5rc8';
        const templateID = 'template_tuma8kl';
        const publicKey = '3a85mBjQ7GVg5KxPe';

        const templateParams = {

            from_name: formData.name,
            from_phone: formData.phone,
            service_type: formData.service,
            message: formData.message,
            to_name: 'Usta Montaj Ekibi', 
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)

        .then((response) => {

            console.log('BAŞARILI!', response.status, response.text);
            alert("Teklif isteğiniz başarıyla mail olarak gönderildi!");
            setFormData({ name: '', phone: '', service: 'Dolap Montajı', message: '' });
        }, (err) => {

            console.log('HATA...', err);
            alert("Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
        });
    };

    const scrollToForm = () => {

        document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
            
            <section className="relative bg-white py-12 md:py-20 lg:py-28 px-4 sm:px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">

                <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10">

                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider"><CheckCircle size={16} /> Profesyonel Montaj Hizmeti</div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">Mobilyalarınız <br /><span className="text-red-600 italic">Emanetimiz.</span></h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">İKEA, Bauhaus veya özel üretim... Koltuk ve dolap montajında profesyonel, temiz ve hızlı çözüm.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

                        <button onClick={scrollToForm} className="w-full sm:w-auto bg-red-600 hover:bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-red-200 hover:shadow-slate-200 active:scale-95">
                            Hemen Fiyat Teklifi Al
                        </button>

                    </div>

                </div>

                <div className="flex-1 w-full relative">

                    <div className="absolute -inset-4 bg-red-600/5 rounded-[3rem] rotate-3"></div>
                    <img src="https://cdn.armut.com/images/services/desktop-large/00041-mobilya-ustasi.jpg?v=1769586440693" alt="Montaj Ustası" className="relative rounded-[2.5rem] shadow-2xl border-4 md:border-8 border-white w-full h-[300px] md:h-[500px] object-cover"/>

                </div>

            </section>

            <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 bg-slate-100">

                <div className="text-center mb-12 md:mb-20">

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">Neler Yapıyoruz?</h2>
                    <div className="w-24 h-2 bg-red-600 mx-auto mt-4 rounded-full"></div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">

                    <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-red-600">

                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Sofa className="w-8 h-8 text-red-600" /></div>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase italic">Koltuk Montajı</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">Köşe takımları, berjerler, mekanizmalı koltuklar ve yataklı kanepelerin kurulumu. Parça artırmadan, gıcırtı yapmadan!</p>

                    </div>

                    <div className="group bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-red-600">

                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Layout className="w-8 h-8 text-red-600" /></div>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase italic">Dolap & Gardırop</h3>
                        <p className="text-slate-500 leading-relaxed font-medium">Ray dolaplar, menteşe ayarları, duvar sabitleme ve panel kurulumları. Terazi hassasiyetinde montaj.</p>

                    </div>

                </div>

            </section>

            <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 bg-white">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto text-center">

                    <div className="flex flex-col items-center group">

                        <div className="bg-emerald-50 p-6 rounded-[2rem] mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500"><ShieldCheck size={40} /></div>
                        <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Güvenli Kurulum</h4>
                        <p className="text-slate-500 font-medium px-4">Duvar sabitleme hizmetiyle çocuklarınız ve eviniz güvende.</p>

                    </div>

                    <div className="flex flex-col items-center group">

                        <div className="bg-orange-50 p-6 rounded-[2rem] mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500"><Clock size={40} /></div>
                        <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Hızlı Servis</h4>
                        <p className="text-slate-500 font-medium px-4">Aynı gün veya en geç ertesi gün montaj randevusu.</p>

                    </div>

                    <div className="flex flex-col items-center group sm:col-span-2 lg:col-span-1">

                        <div className="bg-red-50 p-6 rounded-[2rem] mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500"><Hammer size={40} /></div>
                        <h4 className="font-black text-xl mb-2 uppercase tracking-tight">Temiz İşçilik</h4>
                        <p className="text-slate-500 font-medium px-4">Montaj sonrası tüm ambalaj ve tozlar titizlikle temizlenir.</p>

                    </div>

                </div>

            </section>

            <section id="quote-form" className="py-16 md:py-24 px-4 sm:px-8 lg:px-24 bg-slate-900 relative overflow-hidden">

                <Hammer className="absolute -bottom-10 -left-10 text-white/5 w-64 h-64 -rotate-12" />

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="flex-1 text-center lg:text-left text-white space-y-6">

                        <h2 className="text-4xl md:text-6xl font-black leading-tight italic uppercase tracking-tighter">Hemen <br />Fiyat Alın</h2>
                        <p className="text-slate-400 text-lg md:text-xl font-medium italic">"Kurulacak ürünün görselini veya linkini mesaj kısmına eklerseniz net fiyat verebiliriz."</p>
                        <div className="hidden lg:block w-20 h-2 bg-red-600 rounded-full"></div>

                    </div>

                    <div className="flex-1 w-full bg-white p-6 md:p-10 rounded-[2.5rem] text-slate-800 shadow-2xl relative z-10">

                        <form className="grid grid-cols-1 gap-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div className="space-y-2">

                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Ad Soyad</label>
                                    <input type="text" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-red-600 transition-all font-bold" placeholder="Ferhat Yüksel" />

                                </div>

                                <div className="space-y-2">

                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Telefon</label>
                                    <input type="tel" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-red-600 transition-all font-bold" placeholder="05xx" />

                                </div>

                            </div>

                            <div className="space-y-2">

                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Hizmet Türü</label>

                                <select className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-red-600 transition-all font-bold appearance-none cursor-pointer">

                                    <option>Dolap Montajı</option>
                                    <option>Koltuk Montajı</option>
                                    <option>Tamirat / Menteşe Ayarı</option>

                                </select>

                            </div>

                            <div className="space-y-2">

                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Mesajınız</label>
                                <textarea className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl h-32 focus:outline-none focus:border-red-600 transition-all font-bold resize-none" placeholder="Ürün linki veya detaylar..."></textarea>

                            </div>

                            <button onClick={() => handleSubmit} className="w-full bg-red-600 hover:bg-slate-900 text-white font-black uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-200 hover:shadow-slate-400">

                                <Send size={20} />
                                Teklif İsteğini Gönder

                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </div>

    );
};

export default Home;