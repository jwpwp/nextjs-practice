import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;

  // Promise.all()로 묶어서 MovieInfo와 MovieVideos를 불러올 수도 있지만 이렇게 하면 두 작업이 모두 끝나야 한번에 나옴.(그리고 이 경우에는 return 윗 부분에서 fetch하기때문에 loading.tsx가 작동함.)
  // 따라서 Suspense로 각각을 묶어두면 각 fallback이 작동하고, 각 fetching이 끝나면 따로따로 끝나는대로 렌더링 됨.
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
