"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";
import Link from "next/link";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
