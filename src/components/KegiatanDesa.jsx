import React, { useEffect, useState } from 'react';
import defaultImage from '../assets/kegiatan1.jpg'; // Gambar default jika tidak ada

const KegiatanDesa = () => {
  const [kegiatanList, setKegiatanList] = useState([]);
  const [visible, setVisible] = useState(false);

  // Mengambil data dari API
  const fetchKegiatan = async () => {
    try {
      const response = await fetch(
        'https://api-kawal-desa.lskk.co.id/api/report/village?guid=e3dbc848-facd-4ce2-9c77-ad18258f9a7d&page=1&limit=10&type=activity'
      );
      const data = await response.json();

      // Jika ada data, mapping ke struktur kegiatanList
      if (data.totalPages > 0 && data.data.length > 0) {
        const apiKegiatanList = data.data.map((item) => ({
          id: item._id,
          title: item.description,
          date: item.reportDateTime.date,
          content: `Kegiatan dilaksanakan di: ${item.address}`, // Menambahkan konten lokasi kegiatan
          image: item.file ? `https://example.com/${item.file}` : defaultImage, // Gambar default jika tidak ada
        }));
        setKegiatanList(apiKegiatanList);
      } else {
        setKegiatanList([]); // Mengatur kegiatanList kosong jika tidak ada data
      }
    } catch (error) {
      console.error('Gagal mengambil data kegiatan:', error);
    }
  };

  useEffect(() => {
    fetchKegiatan();
    const onScroll = () => {
      const section = document.getElementById("kegiatan");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisible(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center" id="kegiatan">
      <h1 className="text-2xl font-bold text-center mb-6">Kegiatan Desa Sukataris</h1>
      <div className="flex justify-center w-full">
        {kegiatanList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {kegiatanList.map((kegiatan, index) => (
              <div
                key={kegiatan.id}
                className={`bg-white shadow-md rounded-lg p-4 w-full max-w-sm mx-auto transform transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={kegiatan.image}
                  alt={kegiatan.title}
                  className="h-48 w-full object-cover rounded-md mb-4 border-4 border-gray-300 transform hover:scale-110 transition-transform duration-300"
                  onError={(e) => (e.target.src = defaultImage)} // Gambar default jika gagal load
                />
                <h2 className="text-xl font-semibold text-center">{kegiatan.title}</h2>
                <p className="text-gray-500 mt-2 text-center">{kegiatan.date}</p>
                <p className="text-gray-500 mt-2 text-center">{kegiatan.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Tidak ada kegiatan yang tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default KegiatanDesa;
