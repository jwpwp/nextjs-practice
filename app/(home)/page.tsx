export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

// 기존 React에서 API 통신 방식. useState, useEffect, isloading들을 사용해야함. 따라서 'use client'를 사용해야 하기에 서버 컴포넌트로 사용할 수 없음.
// export default function HomePage() {
//   const [isLoading, setIsLoding] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(URL);
//     const json = await response.json();
//     setMovies(json);
//     setIsLoding(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
// }
