import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center md:w-1/3 mb-10 md:mb-0">
          <img src={logo} alt="Logo Polhut" className="h-14 mr-4 mb-16" />
          <p className='mb-16'>Indonesia - Jawa Barat - Cianjur - Sukataris</p>
        </div>
        <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-3">Kontak Kami</h3>
          <p className="mb-20">Email: ipkipusat@gmail.com</p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-3">Navigasi</h3>
          <div className="flex flex-col md:flex-row">
            <div className="mr-4 md:mr-10 mb-14">
              <ul>
                <li className="mb-3"><a href="#berita-desa" className="hover:text-gray-500">Berita Desa</a></li>
                <li><a href="#aparat-desa" className="hover:text-gray-500">Aparat Desa</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3"><a href="#kegiatan-kami" className="hover:text-gray-500">Kegiatan Desa</a></li>
                <li><a href="UMKM-desa" className="hover:text-gray-500">UMKM Desa</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-white">
        <p>&copy; 2024 Desa Sukataris. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;