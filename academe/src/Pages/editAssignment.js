import DynamicTable from "../Components/dynamicTable";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useReducer } from "react";

const EditAssignment = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["assignment", "percentage", "grade"];
  //   console.log("id: ", id);

  const [items, setItems] = useState(() => {
    const initialData = [{ assignment: "", percentage: "", grade: "" }];
    const localStorageData = JSON.parse(localStorage.getItem(id));
    if (localStorageData === null) {
      localStorage.setItem(id, JSON.stringify(initialData));
      return initialData;
    }
    return localStorageData;
  });

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  //   localStorage.removeItem("unitAvg");

  const [averageList, setAverageList] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  useEffect(() => {
    localStorage.setItem("unitAvg", JSON.stringify(averageList));
  }, [averageList]);

  //   const updateItems = () => {
  //     const updatedItems = JSON.parse(localStorage.getItem(id));
  //     console.log("updateItems updatedItems: ", updatedItems);
  //     setItems([...updatedItems]);
  //     console.log("updateItems new localStorage: ", localStorage.getItem(id));
  //     console.log("updateItems items: ", items);
  //   };

  console.log("b4 calculateAverage items: ", items);

  const calculateAverage = () => {
    // handleUpdateItems();
    // updateItems();
    console.log("calculateAverage items:", items);
    var sum = 0;
    items.map((item) => {
      sum += item.grade * item.percentage;
    });
    // console.log("sum: ", sum);
    if (isNaN(sum)) return "NaN";
    return sum / 100;
  };

  const setAverage = () => {
    const average = calculateAverage();
    console.log("average: ", average);

    // Check if the item with the current ID exists in averageList
    const foundIndex = averageList.findIndex((item) => item.id === id);

    if (foundIndex === -1) {
      // If not found, add a new entry
      setAverageList((prevList) => [...prevList, { id: id, average: average }]);
    } else {
      // If found, update the existing entry
      setAverageList((prevList) => {
        const updatedList = [...prevList];
        updatedList[foundIndex] = { id: id, average: average };
        return updatedList;
      });
    }

    // After setting the state, log the updated averageList
    console.log("setAverage averageList: ", averageList);
  };

  //   const setAverage = () => {
  //     const average = calculateAverage();
  //     console.log("average: ", average);
  //     // const updateAverageList = [...averageList];
  //     const found = averageList.some((item) => item.id === id);
  //     if (!found) {
  //       const saveData = { id: id, average: average };
  //       console.log("setAverage saveData: ", saveData);
  //       setAverageList([...averageList, saveData]);
  //     }
  //     if (found) {
  //       averageList.map((item) => {
  //         // console.log("b4 if item: ", item);
  //         if (item.id === id) {
  //           item = {
  //             ...item,
  //             average: average,
  //           };
  //           console.log("end of if item: ", item);
  //           setAverageList([...averageList]);
  //         }
  //       });
  //     }
  //     console.log("setAverage averageList: ", averageList);
  //   };

  //   console.log("EditAssignment unitAvg: ", localStorage.getItem("unitAvg"));

  return (
    <>
      <button onClick={setAverage}> Calculate </button>
      {/* <div> {calculateAverage()} </div> */}
      <DynamicTable
        header={header}
        STORAGE_KEY={id}
        onUpdateItems={handleUpdateItems}
      />
    </>
  );
};

export default EditAssignment;

// const assignments = [{ assignment: "ass1", percentage: "10%", grade: "80" }];

// localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));

// console.log("localStorage ass:", localStorage.getItem(STORAGE_KEY));

// console.log("EditSubject type of semester: ", typeof semester);
// console.log("EditSubject semester: ", semester);

//   console.log("EditAssignment local storage id: ", localStorage.getItem(id));
//   console.log("EditAssignment averageList: ", averageList);

//   useEffect(() => {
//     const average = calculateAverage();
//     const saveData = [{ id: id, average: average }];
//     setAverageList([...averageList, saveData]);
//   }, [items]);

//   const [averageList, setAverageList] = useState(() => {
//     const average = calculateAverage();
//     const saveData = [...averageList, { id: id, average: average }];
//     localStorage.setItem("unitAvg", saveData);
//   }, [items]);
