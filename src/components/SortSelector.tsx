import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onOrderChanged: (sortOrders: string) => void;
  selectedOrder: string | null;
}

const SortSelector = ({ onOrderChanged, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Releas date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton mx={10} as={Button} rightIcon={<BsChevronDown />}>
        {`Order by ${selectedOrder ? currentSortOrder?.label : "Relevance"}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onOrderChanged(order.value)}
            value={order.value}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
