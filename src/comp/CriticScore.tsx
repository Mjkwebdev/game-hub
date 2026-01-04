import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score < 85 ? "pink" : "blue";
  return (
    <div>
      <Badge
        fontSize="15px"
        paddingX={3}
        borderRadius={5}
        color={color}
        colorScheme={color}
      >
        {" "}
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
