import React from "react";
import useGenre from "src/hook/useGenre";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((genr) => (
        <li key={genr.id}>{genr.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
