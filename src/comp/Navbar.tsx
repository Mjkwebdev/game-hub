import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "../comp/ColorModeSwitch";
import SearchInput from "src/comp/SearchInput";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
