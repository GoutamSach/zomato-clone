import { Select, Option } from "@material-tailwind/react";

export function Sort() {
  return (
    <div className=" w-min text-gray-400 ">
      <Select label="Sort by">
        <Option className=" ">Popularity</Option>
        <Option>Rating: High to Low</Option>
        <Option>Delivery Time</Option>
        <Option>Cost: Low to High</Option>
        <Option>Cost: High to Low</Option>
      </Select>
    </div>
  );
}
export default Sort;
