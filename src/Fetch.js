import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Fetch = () => {
  // const jsonplaceholder = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );
  // // console.log(jsonplaceholder);

  // const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  // if (!res.response) {
  //   return <div>Loading...</div>;
  // }
  // const dogName = res.response.status;
  // const imageUrl = res.response.message;
  // // console.log(res)

  // Ben awad code
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${count}`
  );
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  console.log(data);
  return (
    <div className="App">
      <div>
        TodoNo:{count} {!data ? "loading..." : data.title}
      </div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};
