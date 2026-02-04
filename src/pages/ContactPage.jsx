import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { PiPhoneLight, PiEnvelopeLight, PiMapPinLight, PiTelegramLogoLight, PiClockLight } from "react-icons/pi";

const ContactPage = () => {

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {

        e.preventDefault();

        const serviceID = 'service_vw4gtml';
        const templateID = 'template_ka601bt';
        const publicKey = 'fU1dvyv_99NCd3K7-';

        const templateParams = {

            from_name: formData.name,
            from_phone: formData.phone,
            service_type: formData.service,
            message: formData.message,
            to_name: 'Usta Montaj Ekibi', 
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)

        .then((response) => {

            alert("Teklif isteğiniz başarıyla mail olarak gönderildi!");
            setFormData({ name: '', phone: '', service: 'Dolap Montajı', message: '' });
        }, (err) => {

            alert("Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
        });
    };

    const contactInfo = [

        {
            icon: <PiPhoneLight size={28} />,
            title: "Telefon & WhatsApp",
            detail: "+90 (550) 537 97 35",
            subDetail: "Pazartesi - Cumartesi: 17:30 - 24:00"
        },
        {
            icon: <PiEnvelopeLight size={28} />,
            title: "E-posta",
            detail: "yukselferhat35@gmail.com",
            subDetail: "Kurumsal teklifler için yazabilirsiniz"
        },
        {
            icon: <PiMapPinLight size={28} />,
            title: "Hizmet Bölgesi",
            detail: "Çankaya, Sincan, Kayaş",
            subDetail: "Ankara geneli yerinde montaj"
        }
    ];

    return (

        <div className="bg-white min-h-screen">

            <div className="bg-slate-900 py-20 px-4 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Hemen <span className="text-red-500">Teklif Alın</span></h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Montajı yapılacak ürünün detaylarını paylaşın, 30 dakika içinde fiyatlandıralım.</p>

                </div>

            </div>

            <div className="max-w-6xl mx-auto px-4 -mt-12 mb-20 relative z-20">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <div className="lg:col-span-1 space-y-4">

                        {contactInfo.map((item, index) => ( <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 group hover:border-red-200 transition-all duration-300">

                            <div className="text-red-600 bg-red-50 p-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">{item.icon}</div>

                            <div>

                                <h3 className="font-bold text-slate-800 text-base mb-1">{item.title}</h3>
                                <p className="text-slate-700 font-semibold text-sm">{item.detail}</p>
                                <p className="text-slate-400 text-[11px] mt-1 uppercase tracking-wider">{item.subDetail}</p>

                            </div>

                        </div> ))}

                        <div className="bg-red-600 rounded-2xl p-6 text-white shadow-xl shadow-red-200">

                            <div className="flex items-center gap-3 mb-3">

                                <PiClockLight size={24} />
                                <h4 className="font-bold italic">Hızlı Yanıt Garantisi</h4>

                            </div>

                            <p className="text-sm text-red-100">Mesai saatleri içerisinde gönderilen formlara ortalama 15-30 dakika içinde dönüş sağlıyoruz.</p>

                        </div>

                    </div>

                    <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-50">

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-2">

                                    <label className="text-sm font-bold text-slate-700 ml-1">Adınız Soyadınız</label>
                                    <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all" placeholder="Örn: Semih Cingitaş" onChange={(e) => setFormData({...formData, name: e.target.value})}/>

                                </div>

                                <div className="space-y-2">

                                    <label className="text-sm font-bold text-slate-700 ml-1">E-posta Adresiniz</label>
                                    <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all" placeholder="ornek@mail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>

                                </div>

                            </div>

                            <div className="space-y-2">

                                <label className="text-sm font-bold text-slate-700 ml-1">Montaj Türü / Konu</label>

                                <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all" onChange={(e) => setFormData({...formData, subject: e.target.value})}>

                                    <option>Gardırop Montajı</option>
                                    <option>Koltuk / Kanepe Kurulumu</option>
                                    <option>TV Ünitesi / Raf Sabitleme</option>
                                    <option>Diğer (Lütfen mesajda belirtin)</option>

                                </select>

                            </div>

                            <div className="space-y-2">

                                <label className="text-sm font-bold text-slate-700 ml-1">Ürün Detayları ve Adresiniz</label>
                                <textarea rows="5" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-red-500 focus:bg-white outline-none transition-all resize-none" placeholder="Kurulacak ürünün markası, parça sayısı ve konumunuzu yazınız..." onChange={(e) => setFormData({...formData, message: e.target.value})} ></textarea>

                            </div>

                            <button type="submit" className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-700 hover:-translate-y-1 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3 uppercase tracking-wider">
                                <PiTelegramLogoLight size={28} /> Ücretsiz Teklif İste
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default ContactPage;