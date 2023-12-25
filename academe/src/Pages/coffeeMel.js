import React, { useState, useEffect, useMemo } from "react";
import { useGlobalFilter, useTable } from "react-table";
import { coffeeDataColumn } from "../Components/column";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//https://hygraph.com/blog/react-table
const CoffeeMel = () => {
  const dataApi =
    "https://data.melbourne.vic.gov.au/api/explore/v2.1/catalog/datasets/cafes-and-restaurants-with-seating-capacity/records?where=trading_name%20like%20%27%25cafe%25%27%20or%20trading_name%20like%20%27%25coffee%25%27%20or%20trading_name%20like%20%27%25c%C3%A1fe%25%27%20and%20trading_name%20like%20%27%25espresso%25%27&limit=100&refine=census_year%3A%222022%22&refine=clue_small_area%3A%22Melbourne%20(CBD)%22&refine=industry_anzsic4_description%3A%22Cafes%20and%20Restaurants%22";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const results = await fetch(dataApi);
      const responseData = await results.json();
      setData(responseData.results);
    } catch (e) {
      console.error("error fetching data:", e);
    }
  };

  const columns = useMemo(() => coffeeDataColumn, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter);

  const { globalFilter } = state;

  return (
    <div className="container">
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        <Form.Control
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </InputGroup>
      <table {...getTableProps()} className="table table-striped table-hover">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoffeeMel;
