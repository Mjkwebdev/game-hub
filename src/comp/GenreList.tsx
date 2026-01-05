import React from "react";
import useData from "src/hook/useData";
import { Genre } from "src/hook/useGenre";
const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genr) => (
        <li key={genr.id}>{genr.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
