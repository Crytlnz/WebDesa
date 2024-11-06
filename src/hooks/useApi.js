import { useState, useEffect } from "react";
import {
  fetchVillageActivities,
  fetchVillageAssets,
  fetchVillageNews,
  fetchVillageProfile,
  fetchVillageUMKM,
} from "../helpers/service";

export const useVillageAssets = (page = 1, limit = 10) => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const data = await fetchVillageAssets(page, limit);
        setAssets(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, [page, limit]);

  return { assets, loading, error };
};

export const useVillageActivities = (page = 1, limit = 10) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchVillageActivities(page, limit);
        setActivities(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, [page, limit]);

  return { activities, loading, error };
};

export const useVillageUMKM = (page = 1, limit = 10) => {
  const [umkm, setUMKM] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUMKM = async () => {
      try {
        const data = await fetchVillageUMKM(page, limit);
        setUMKM(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadUMKM();
  }, [page, limit]);

  return { umkm, loading, error };
};

export const useVillageNews = (page = 1, limit = 10) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchVillageNews(page, limit);
        setNews(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [page, limit]);

  return { news, loading, error };
};

export const useVillageProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchVillageProfile();
        setProfile(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
};

export const useVillageArea = () => {
  const [area, setArea] = useState(null);
  const [villageCenter, setVillageCenter] = useState(null); // State untuk pusat desa
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchVillageProfile();

        if (data && data.vaillage) {
          if (data.vaillage.villageBoundaries) {
            setArea(
              data.vaillage.villageBoundaries.map((boundary) => ({
                lat: boundary.latitude,
                lng: boundary.longitude,
              }))
            );
          }

          if (data.vaillage.villageBoundaries) {
            setVillageCenter({
              lat: data.vaillage.latitude,
              lng: data.vaillage.longitude,
            });
          } else {
            setVillageCenter({ lat: -6.9263, lng: 107.6365 }); // Silakan sesuaikan jika perlu
          }
        } else {
          throw new Error("Data village tidak ditemukan.");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { area, villageCenter, loading, error }; // Kembalikan villageCenter
};
