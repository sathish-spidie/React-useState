import React, { useEffect, useState } from "react";

// Ben awad method
export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.json())
      .then(y => {
        setState({ data: y, loading: false });
      });
  }, [url]);
  return state;
};

// export const useFetch = url => {
//   useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       const response = await fetch(url);
//       const json = await response.json();
//       const data = console.log(json);
//       // ...
//     }
//     fetchData();
//   }, [url]);
// };

// export const useFetch = (url, options) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url, options);
//         const json = await res.json();
//         setResponse(json);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return { response, error };
// };
