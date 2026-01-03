import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react';
import apiClient from 'src/services/api-client';
import useGames from 'src/hook/hook';
const GameGrid = () => {
     const {games,error}= useGames()
    return (
        <>
        
        <div> 
         {error &&   <Text> {error}</Text>}
  <ul>
    {games.map(game =>
    <li key={game.id}>{game.name}</li>)}
  </ul>
    </div>
    </>
  )
}

export default GameGrid