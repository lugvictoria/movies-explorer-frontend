import { useMemo, useState } from "react";

function useFormValidate(initial) {
  const [validate, setValidate] = useState(initial);

  const isValid = useMemo(() => {
    return Object.values(validate).every((it) => !it.trim());
  }, [validate]);

  return {
    validate,
    isValid,
    setValidate,
  };
}

export default useFormValidate;
