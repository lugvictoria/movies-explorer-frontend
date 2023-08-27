import { useEffect, useRef } from "react";

const useDidUpdateEffect = (effect, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, [...deps]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useDidUpdateEffect;
