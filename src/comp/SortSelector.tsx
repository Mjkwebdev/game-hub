import { Button, Menu } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {"Order By :Relevence"} <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="1"> Relevence </Menu.Item>
          <Menu.Item value="2"> Date added </Menu.Item>
          <Menu.Item value="3"> Name </Menu.Item>
          <Menu.Item value="4"> Release Date </Menu.Item>
          <Menu.Item value="5"> Popularity </Menu.Item>
          <Menu.Item value="6"> Rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
