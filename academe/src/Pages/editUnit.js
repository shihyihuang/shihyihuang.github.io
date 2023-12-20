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
    const unitArray = [];
    var weightedMark = 0;
    var weightCredit = 0;
    items.map((item) => {
      const avgItem = unitAvg.find(
        (avgItem) => item.unit === avgItem.id.split("-")[1]
      );
      unitArray.push(item.unit);
      if (avgItem) {
        switch (item["year level"]) {
          case "1":
            weightedMark += avgItem.average * 0.5 * item["credit points"];
            weightCredit += 0.5 * item["credit points"];
            break;
          case undefined:
            return NaN;
          // wamObjArray.push({
          //   id: avgItem.id,
          //   wam: NaN,
          // });
          default:
            weightedMark += avgItem.average * 1 * item["credit points"];
            weightCredit += 1 * item["credit points"];
        }
      }
    });
    const wamOfSemester =
      Math.round((weightedMark / weightCredit + Number.EPSILON) * 1000) / 1000;
    // console.log("<eu >typeof wamOfSemester: ", typeof wamOfSemester);
    const infoOfSemester = {
      semester: id,
      unit: unitArray.join(", "),
      wam: wamOfSemester,
    };
    return infoOfSemester;
  };

  console.log("infoOfSemester: ", calculateWam());

  const setWam = () => {
    const infoOfSemester = calculateWam();
    const foundIndex = wamArray.findIndex(
      (wamItem) => wamItem.semester === infoOfSemester.semester
    );
    if (foundIndex === -1) {
      setWamArray((prevArray) => [
        ...prevArray,
        {
          semester: infoOfSemester.semester,
          unit: infoOfSemester.unit,
          wam: infoOfSemester.wam,
        },
      ]);
    } else {
      setWamArray((prevArray) => {
        const updatedItems = [...prevArray];
        updatedItems[foundIndex] = {
          semester: infoOfSemester.semester,
          unit: infoOfSemester.unit,
          wam: infoOfSemester.wam,
        };
        return updatedItems;
      });
    }
  };

  // const WamOfSemester = () => {
  //   const wamObjArray = calculateWam();
  //   var wamOfSemester = 0;
  //   var temp = 0;
  //   wamObjArray.map((wamObj) => {
  //     temp += wamObj.wam;
  //   });
  //   wamOfSemester = temp / wamObjArray.length;
  //   return wamOfSemester;
  // };

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
        WAM: {calculateWam().wam}{" "}
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
        array={retrieveAvg()}
        onUpdateItems={handleUpdateItems}
        type={"one"}
        columnToRender={["unit", "year level", "credit points"]}
        hasBack={true}
        hasAdd={true}
      />
    </div>
  );
};

export default EditUnit;

//   const units = [{ unit: "FIT5032", average: "80" }];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(units));
