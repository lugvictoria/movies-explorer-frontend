import { useState } from "react";

const initial = {
  status: false,
  message: "",
};

const useFetch = (callback, initialLoading = false) => {
  const [isLoading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(initial);

  const fetching = async (...args) => {
    try {
      setLoading(true);
      setError(initial);

      if (typeof callback !== "undefined" && typeof callback === "function") {
        await callback(...args);
      }
    } catch (e) {
      setError({
        status: true,
        message: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetch;
