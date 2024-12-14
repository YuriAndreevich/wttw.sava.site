import { useState, useEffect } from "react";
import axios from "../axios"; 

export const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller; 

    const fetchData = async () => {
      try {
        const config = {
          method,
          url,
          signal,
          ...(body && { data: body }), 
        };
        const response = await axios(config);
        setData(response.data); 
      } catch (err) {
        if (err.name === "CanceledError") {
          console.log("Запрос был useFetch отменен");
        } else {
          setError(err.response?.data?.message || "Что-то пошло не так");
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, method, body]);

  return { data, loading, error };
};
