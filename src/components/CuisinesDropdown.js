import {
  Checkbox,
  Card,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function CuisinesDropdown(props) {
  const [Cuisines, setCuisines] = useState([]);
  const [CuisineDropDown, setCuisineDropDown] = useState(false);
  const [SelectedCuisine, setSelectedCuisine] = useState();

  function submittedCuisines(e) {
    e.preventDefault();
    const data = new Set(Cuisines);
    setSelectedCuisine(data);
    setCuisines("");

    setCuisineDropDown(false);
  }

  function submittedCuisine(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setCuisines([...Cuisines, value]);
    }
  }

  useEffect(() => {
    console.log(SelectedCuisine);
    // console.log(Cuisines);
  }, [SelectedCuisine]);

  function handleClear() {
    window.location.reload();
  }
  return (
    <>
      <div className="">
        <div
          onClick={() => {
            if (CuisineDropDown === false) {
              setCuisineDropDown(true);
            }
            if (CuisineDropDown === true) {
              setCuisineDropDown(false);
            }
          }}
          className=" hover:bg-gray-100 cursor-pointer flex items-center gap-1 text-gray-400  border border-gray-400 rounded-lg p-1.5 w-max px-2  "
        >
          Cuisines
          <KeyboardArrowDownIcon style={{ width: "16px" }} />
        </div>
        <div className=" fixed z-10">
          {CuisineDropDown && (
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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

                      <Typography
                        color="blue-gray"
                        className=" font-normal text-sm"
                      >
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
          )}
        </div>
      </div>
    </>
  );
}
