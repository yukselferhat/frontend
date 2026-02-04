import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Header = () => {

    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [

        { name: 'Ana Sayfa', path: '/' },
        { name: 'SSS', path: '/sss' },
        { name: 'Biz Kimiz', path: '/about' },
        { name: 'Bize Ulaşın', path: '/contact' },
    ];

    return (

        <header className='w-full border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm'>

            <div className='max-w-7xl mx-auto py-4 px-4 md:px-8 flex items-center justify-between'>

                <div onClick={() => navigate('/')} className='cursor-pointer flex items-center gap-2'>

                    {/* <img className='w-32 md:w-40 object-contain' src="/MERNlogo2.png" alt="logo" /> */}
                    <span className="font-black italic text-sm text-slate-800">Ankara Mobilya <span className="text-red-600">MONTAJ HIZMETLERI</span></span>

                </div>

                <nav className='hidden lg:flex items-center gap-8'>

                    {menuItems.map((item) => ( <div key={item.name} onClick={() => navigate(item.path)} className='text-sm font-semibold text-slate-600 hover:text-red-600 cursor-pointer transition-colors duration-300'>

                        {item.name}

                    </div> ))}

                </nav>

                <div className='flex items-center gap-6'>

                    <div className='hidden sm:flex items-center gap-3 border-l pl-6 border-slate-200'>

                        <div className='bg-blue-50 p-2 rounded-full text-red-600'><TfiHeadphoneAlt size={24} /></div>

                        <div className='flex flex-col'>

                            <span className='text-[10px] uppercase font-bold text-slate-400 leading-none mb-1'>Hızlı Destek</span>
                            <a className='text-sm font-bold text-slate-800 hover:text-red-600 transition-colors' href="tel:+905505379735">05505379735</a>

                        </div>

                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors'>

                        {isMobileMenuOpen ? <IoCloseOutline size={32} /> : <IoMenuOutline size={32} />}

                    </button>

                </div>

            </div>

            {isMobileMenuOpen && ( <div className='lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl z-40 animate-in slide-in-from-top duration-300'>

                <div className='flex flex-col p-6 gap-4'>

                    {menuItems.map((item) => ( <div key={item.name} onClick={() => { navigate(item.path); setIsMobileMenuOpen(false); }} className='text-lg font-medium text-slate-700 p-2 hover:bg-blue-50 hover:text-red-600 rounded-md transition-all'>

                        {item.name}

                    </div>))}

                    <hr className='my-2 border-slate-100' />
                    <div className='flex items-center gap-4 p-4 bg-slate-50 rounded-xl'><TfiHeadphoneAlt size={28} className='text-red-600' /><div>
                    <h4 className='text-xs font-bold text-slate-400 uppercase'>Bizi Arayın</h4>
                    <a href="tel:+905505379735" className='text-base font-bold text-slate-800'>+905505379735</a>

                        </div>

                    </div>

                </div>

            </div> )}

        </header>

    );
};

export default Header;