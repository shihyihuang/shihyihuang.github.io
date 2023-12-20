import { useLocation, useNavigate } from "react-router-dom";
import StaticTable from "../Components/staticTable";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Icon from "../Components/icon";

const EditUnit = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["unit", "year level", "credit points", "mark"];

  console.log(
    "<editUnit>",
    id,
    "'s local: ",
    JSON.parse(localStorage.getItem(id))
  );

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(id)) || []
  );

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  const [unitAvg, setUnitAvg] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  const [wamArray, setWamArray] = useState(
    JSON.parse(localStorage.getItem("wam")) || []
  );

  useEffect(() => {
    localStorage.setItem("wam", JSON.stringify(wamArray));
  }, [wamArray]);

  const retrieveAvg = () => {
    const temp = [];
    unitAvg.map((unit) => {
      if (unit.id.split("-")[0] === id) {
        temp.push({ id: unit.id.split("-")[1], average: unit.average });
      }
    });
    return temp;
  };

  console.log("wamArray: ", wamArray);

  const calculateWam = () => {
    const wamObjArray = [];
    items.map((item) => {
      const avgItem = unitAvg.find(
        (avgItem) => item.unit === avgItem.id.split("-")[1]
      );
      if (avgItem) {
        switch (item["year level"]) {
          case "1":
            wamObjArray.push({
              id: avgItem.id,
              wam:
                (avgItem.average * 0.5 * item["credit points"]) /
                (0.5 * item["credit points"]),
            });
            break;
          case undefined:
            wamObjArray.push({
              id: avgItem.id,
              wam: NaN,
            });
            break;
          default:
            wamObjArray.push({
              id: avgItem.id,
              wam:
                (avgItem.average * 1 * item["credit points"]) /
                (1 * item["credit points"]),
            });
        }
      }
    });
    return wamObjArray;
  };

  console.log("wamObjArray: ", calculateWam());

  const calculateWamOfSemester = () => {
    const wamObjArray = calculateWam();
    var wamOfSemester = 0;
    var temp = 0;
    wamObjArray.map((wamObj) => {
      temp += wamObj.wam;
    });
    wamOfSemester = temp / wamObjArray.length;
    return wamOfSemester;
  };

  const setWam = () => {
    const wamObjArray = calculateWam();
    wamObjArray.map((wamObj) => {
      const foundIndex = wamArray.findIndex(
        (wamItem) => wamItem.id === wamObj.id
      );
      if (foundIndex === -1) {
        setWamArray((prevArray) => [
          ...prevArray,
          { id: wamObj.id, wam: wamObj.wam },
        ]);
      } else {
        setWamArray((prevArray) => {
          const updatedItems = [...prevArray];
          updatedItems[foundIndex] = { id: wamObj.id, wam: wamObj.wam };
          return updatedItems;
        });
      }
    });
  };

  // console.log("calculateWam's return: ", calculateWam());
  // console.log("wamArray: ", wamArray);

  // console.log("<editUnit> unitAvg: ", unitAvg);
  // console.log("<editUnit> retrieveAvg's return array: ", retrieveAvg());
  // console.log(
  //   "<editUnit> wamArray's local: ",
  //   JSON.parse(localStorage.getItem("wam"))
  // );

  return (
    <div className="container">
      <h5 style={{ marginTop: "20px", marginLeft: "20px" }}>
        {" "}
        GARDE / {id.toUpperCase()}
      </h5>
      <h3 style={{ float: "right", margin: "20px" }}>
        {" "}
        WAM: {calculateWamOfSemester()}{" "}
      </h3>
      <Button
        onClick={setWam}
        style={{ float: "right", marginTop: "20px" }}
        variant="outline-secondary">
        Save
      </Button>
      <StaticTable
        header={header}
        id={id}
        averageArray={retrieveAvg()}
        onUpdateItems={handleUpdateItems}
        type={"one"}
        columnToRender={["unit", "year level", "credit points"]}
      />
    </div>
  );
};

export default EditUnit;

//   const units = [{ unit: "FIT5032", average: "80" }];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(units));
