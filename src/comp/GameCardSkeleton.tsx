import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <div>
      <GameCardContainer>
        <Card.Root>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card.Root>
      </GameCardContainer>
    </div>
  );
};

export default GameCardSkeleton;
