import { useState } from "react";

export const useForm = initVal => {
  const [val, setVal] = useState(initVal);
  return [
    val,
    e => {
      setVal({
        ...val,
        [e.target.name]: e.target.value
      });
    }
  ];
};
