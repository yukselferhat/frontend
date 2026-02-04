import { FaWhatsapp } from 'react-icons/fa'

const ChatWindow = () => {

    const handleWhatsAppClick = () => {

        const numara = "905060537423";
        const mesaj = "Merhaba, mobilya montajı hakkında bilgi almak istiyorum.";
        const url = `https://wa.me/${numara}?text=${encodeURIComponent(mesaj)}`;
        window.open(url, '_blank');
    };

    return (

        <div className="fixed bottom-5 right-5 z-50 font-sans">

            <button onClick={handleWhatsAppClick} className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group">

                <FaWhatsapp size={24} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm">Bize Whatsapp Yazın</span>

            </button>     

        </div>

    );
};


export default ChatWindow;
