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
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Fragment } from "react/jsx-runtime";

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
        <Icon
          key={platform.id}
          marginRight={1}
          fontSize="20px"
          as={iconMap[platform.slug] || BsGlobe}
          color={"grey"}
        />
      ))}
    </div>
  );
};

export default PlatformIconList;
