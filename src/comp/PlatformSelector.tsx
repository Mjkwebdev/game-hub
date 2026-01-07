import { Button, Menu } from "@chakra-ui/react";
import { Platform } from "src/hook/hook";
import usePlatform from "src/hook/platform";
interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          platform
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.id.toString()}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
