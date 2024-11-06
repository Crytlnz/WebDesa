import React, { useEffect, useState } from 'react';
import defaultImg from '../assets/UMKM1.jpg';

const UMKMDesa = () => {
  const [umkmList, setUmkmList] = useState([]);
  const [visible, setVisible] = useState(false);

  // Fungsi untuk mengambil data dari API
  const fetchUMKMData = async () => {
    try {
      const response = await fetch(
        'https://api-kawal-desa.lskk.co.id/api/umkm/village?guid=2305e536-0ef6-48e7-9aac-79ca236433fa&page=1&limit=10'
      );
      const data = await response.json();

      const apiData = data.data.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        image: item.file ? `https://bucket-2.nos.wjv-1.neo.id/${item.file}` : defaultImg,
        owner: item.owner,
        address: item.street,
      }));
      setUmkmList(apiData);
    } catch (error) {
      console.error('Error fetching UMKM data:', error);
    }
  };

  // Animasi scroll
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("umkm");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisible(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    fetchUMKMData();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="umkm" className="py-12 bg-gray-200 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          UMKM Desa Sukataris
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {umkmList.map((umkm, index) => (
            <div
              key={umkm.id}
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={umkm.image}
                alt={umkm.name}
                className="w-full h-48 object-cover rounded-md mb-4 border-4 border-gray-300 transform hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2">{umkm.name}</h3>
              <p className="text-gray-600 mb-1">{umkm.description}</p>
              <p className="text-gray-700 font-medium mb-1">Pemilik: {umkm.owner}</p>
              <p className="text-gray-600 text-sm">{umkm.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UMKMDesa;
