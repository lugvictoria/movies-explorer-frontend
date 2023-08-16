import { useState } from "react";

const initial = {
  status: false, message: "",
};

const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(initial);

  const fetching = async (...args) => {
    setError(initial);

    try {
      setLoading(true);

      if (typeof callback !== "undefined" && typeof callback === "function") {
        return await callback(...args);
      }
    } catch (e) {
      setError({
        status: true, message: e.message,
      });

      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetch;
