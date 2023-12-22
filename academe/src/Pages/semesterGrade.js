import Table from "../Components/table";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SemesterGrade = () => {
  const header = ["unit", "credit points", "year level", "mark"];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(id)) || []
  );

  const [unitAvg, setUnitAvg] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  const [wamArray, setWamArray] = useState(
    JSON.parse(localStorage.getItem("wam")) || []
  );

  useEffect(() => {
    localStorage.setItem("wam", JSON.stringify(wamArray));
  }, [wamArray]);

  useEffect(() => {
    setWam();
  }, [unitAvg, items]);

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  const retrieveAvg = () => {
    const temp = [];
    unitAvg.map((unit) => {
      if (unit.id.split("-")[0] === id) {
        temp.push({ id: unit.id.split("-")[1], average: unit.average });
      }
    });
    return temp;
  };

  const calculateWam = () => {
    const unitArray = [];
    var weightedMark = 0;
    var weightedCredit = 0;
    items.map((item) => {
      const avgItem = unitAvg.find(
        (avgItem) => item.unit === avgItem.id.split("-")[1]
      );
      if (avgItem) {
        unitArray.push(item.unit);
        switch (item["year level"]) {
          case "1":
            weightedMark += avgItem.average * 0.5 * item["credit points"];
            weightedCredit += 0.5 * item["credit points"];
            break;
          case "2":
            weightedMark += avgItem.average * 1 * item["credit points"];
            weightedCredit += 1 * item["credit points"];
            break;
          case "Select Year":
            return NaN;
          default:
            return NaN;
        }
      }
    });
    const infoOfSemester = {
      semester: id,
      unit: unitArray,
      weightedMark: weightedMark,
      weightedCredit: weightedCredit,
      wam:
        Math.round((weightedMark / weightedCredit + Number.EPSILON) * 1000) /
        1000,
    };
    return infoOfSemester;
  };

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
          weightedMark: infoOfSemester.weightedMark,
          weightedCredit: infoOfSemester.weightedCredit,
          wam: infoOfSemester.wam,
        },
      ]);
    } else {
      setWamArray((prevArray) => {
        const updatedItems = [...prevArray];
        updatedItems[foundIndex] = {
          semester: infoOfSemester.semester,
          unit: infoOfSemester.unit,
          weightedMark: infoOfSemester.weightedMark,
          weightedCredit: infoOfSemester.weightedCredit,
          wam: infoOfSemester.wam,
        };
        return updatedItems;
      });
    }
  };

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
      <Table
        header={header}
        id={id}
        array={retrieveAvg()}
        hasOnUpdateItems={true}
        onUpdateItems={handleUpdateItems}
        type={"dropdown"}
        columnToRender={["unit", "credit points"]}
        columnDropdown={"year level"}
        navigatePath="/unitGrade"
        hasBack={true}
        hasAdd={true}
      />
    </div>
  );
};

export default SemesterGrade;
