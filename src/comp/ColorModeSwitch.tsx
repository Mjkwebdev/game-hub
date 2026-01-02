import { ClientOnly, IconButton, Skeleton, Switch } from "@chakra-ui/react"
import { HStack,Text } from '@chakra-ui/react'
import { LuSun, LuMoon } from "react-icons/lu";
import { useColorMode } from "src/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode,toggleColorMode } = useColorMode();
  return (
    <HStack>
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton 
      onClick={toggleColorMode}
       variant={'outline'} size="sm">
      {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
        </HStack>
  );
}
export default ColorModeSwitch;