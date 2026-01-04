import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "src/hook/hook";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { P } from "framer-motion/dist/types.d-DagZKalS";

interface props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div>
      {platforms.map((platform) => (
        <>
          <Icon
            spaceX={10}
            fontSize="20px"
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"grey"}
          />
        </>
      ))}
    </div>
  );
};

export default PlatformIconList;
