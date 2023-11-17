import {
  Checkbox,
  Card,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
export const CuisineContext = createContext();

export function CuisinesDropdown() {
  const [Cuisines, setCuisines] = useState([]);
  const [CuisineforContext, setCuisineforContext] = useState([]);

  function submittedCuisines(e) {
    e.preventDefault();
    const data = new Set(Cuisines);
    setCuisineforContext(data);
  }

  function submittedCuisine(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setCuisines([...Cuisines, value]);
    }
  }
  function handleClear() {
    window.location.reload();
  }
  return (
    <>
      <CuisineContext.Provider value={{ CuisineforContext }}>
        {CuisineforContext}
      </CuisineContext.Provider>
      <form onSubmit={(e) => submittedCuisines(e)} action=" submit">
        <Card className="  ">
          <h1 className=" pt-4 px-4 text-2xl text-black">Cuisines</h1>
          <List className=" grid grid-cols-3  ">
            <ListItem className="p-0 ">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="North Indian"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  North Indian
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  ripple={false}
                  value="South Indian"
                  onChange={(e) => submittedCuisine(e)}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  South Indian
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Chinese"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Chinese
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Continental"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Continental
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Bengali"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Bengali
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Gujrati"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Gujrati
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Italian"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Italian
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label className="flex  cursor-pointer items-center  ">
                <Checkbox
                  value="Thai"
                  onChange={(e) => submittedCuisine(e)}
                  ripple={false}
                  className="hover:before:opacity-0"
                />

                <Typography color="blue-gray" className=" font-normal text-sm">
                  Thai
                </Typography>
              </label>
            </ListItem>
          </List>
          <div className=" mb-2 mx-4 flex justify-end gap-4 ">
            <Button onClick={() => handleClear()} variant="text">
              Clear all
            </Button>
            <Button type="submit" className=" bg-red-400">
              Apply
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
}
