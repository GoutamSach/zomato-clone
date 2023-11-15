import {
  Checkbox,
  Card,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-tailwind/react";
// const MenuIteam = [
//   { type: "North Indian" },
//   { type: "South Indian" },
//   { type: "Chinese" },
//   { type: "Continental" },
//   { type: "Bengali" },
//   { type: "Gujrati" },
//   { type: "Italian" },
//   { type: "Continental" },
// ];
export function CuisinesDropdown() {
  return (
    <Card className="  ">
      <h1 className=" pt-4 px-4 text-2xl text-black">Cuisines</h1>
      <List className=" grid grid-cols-3  ">
        <ListItem className="p-0 ">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              North Indian
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              South Indian
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Chinese
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Continental
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Bengali
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Gujrati
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Italian
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label className="flex  cursor-pointer items-center  ">
            <Checkbox ripple={false} className="hover:before:opacity-0" />

            <Typography color="blue-gray" className=" font-normal text-sm">
              Continental
            </Typography>
          </label>
        </ListItem>
      </List>
      <div className=" mb-2 mx-4 flex justify-end gap-4 ">
        <Button variant="text">Clear all</Button>
        <Button className=" bg-red-400">Apply</Button>
      </div>
    </Card>
  );
}
