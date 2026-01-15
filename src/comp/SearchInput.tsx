import { Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <>
      <InputGroup startElement={<LuSearch />}>
        <Input
          paddingLeft={5}
          borderRadius={20}
          placeholder="Search games..."
          variant={"outline"}
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
