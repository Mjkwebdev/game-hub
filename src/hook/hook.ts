import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "src/services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "src/App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames =
    (gameQuery:GameQuery) =>
        useData<Game>("/games",
            {
                params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering:  gameQuery.sortOrder
            }
            }, [gameQuery]);
export default useGames;