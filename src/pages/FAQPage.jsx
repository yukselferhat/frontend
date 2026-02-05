import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiCaretDownBold, PiQuestionLight, PiTruckLight, PiHammerLight, PiClockLight } from "react-icons/pi";

const FAQPage = () => {

    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            icon: <PiClockLight size={24} />,
            question: "Ne kadar süre önceden randevu almalıyım?",
            answer: "Genellikle 24-48 saat öncesinden randevu almanız yeterlidir. Ancak acil durumlar için müsaitlik durumumuza göre aynı gün içinde de hizmet verebiliyoruz."
        },
        {
            icon: <PiHammerLight size={24} />,
            question: "Hangi marka mobilyaların montajını yapıyorsunuz?",
            answer: "IKEA, Koçtaş, Bauhaus, Vivense ve Trendyol gibi popüler markaların yanı sıra, tüm özel yapım mobilya, mutfak ve ray dolapların montaj ve demontaj işlemlerini yapıyoruz."
        },
        {
            icon: <PiTruckLight size={24} />,
            question: "Şehir dışı hizmetiniz var mı?",
            answer: "Hizmet bölgemiz şu an için şehir merkezi ve çevre ilçelerle sınırlıdır. Uzak bölgeler için yol ücreti eklenerek hizmet verilebilmektedir. Detaylar için iletişime geçebilirsiniz."
        },
        {
            icon: <PiQuestionLight size={24} />,
            question: "Fiyatlandırma nasıl yapılıyor?",
            answer: "Fiyatlandırma; kurulacak mobilyanın türüne, kapak sayısına ve kurulum süresine göre belirlenir. Bize ürün görselini veya linkini göndererek anında net bir fiyat teklifi alabilirsiniz."
        }
    ];

    return (

        <div className="max-w-4xl mx-auto px-4 py-16">

            <div className="text-center mb-12">

                <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Sıkça Sorulan Sorular</h2>
                <div className="w-16 h-1.5 bg-red-600 mx-auto rounded-full mb-4"></div>
                <p className="text-slate-500 font-medium">Montaj süreci ve hizmetlerimiz hakkında merak ettiğiniz her şey.</p>

            </div>

            <div className="space-y-5">

                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`border rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
                            openIndex === index ? 'border-red-200 shadow-lg' : 'border-slate-100 shadow-sm hover:shadow-md'
                        }`}
                    >
                        <button 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                            className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                                openIndex === index ? 'bg-red-50/50' : 'hover:bg-slate-50'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl transition-colors ${
                                    openIndex === index ? 'bg-red-600 text-white' : 'bg-blue-50 text-red-600'
                                }`}>
                                    {faq.icon}
                                </div>
                                <span className="font-bold text-slate-700 md:text-lg">{faq.question}</span>
                            </div>
                            <PiCaretDownBold 
                                className={`text-slate-400 transition-transform duration-500 ${
                                    openIndex === index ? 'rotate-180 text-red-600' : ''
                                }`} 
                            />
                        </button>
                        
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base border-t border-red-50/50 mt-2">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">

                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold text-white mb-3">Aradığınız yanıtı bulamadınız mı?</h3>

                <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                    Özel ölçü montajlar veya büyük projeleriniz için doğrudan ustamızla görüşebilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <button onClick={() => navigate('/contact')} className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 active:scale-95">Bize Ulaşın</button>
                    <a href="tel:+905550537973" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-sm">Hemen Ara</a>

                </div>

            </div>

        </div>
    );
};

export default FAQPage;