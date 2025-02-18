import Link from "next/link";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  return (
    <div key={id}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
