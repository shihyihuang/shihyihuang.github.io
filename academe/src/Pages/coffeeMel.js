import React,{useState, useEffect, useMemo} from "react";
import { useTable } from "react-table";

const CoffeeMel = () => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        try{
            const searchParams = new URLSearchParams({
                query: 'coffee',
                sort: 'DISTANCE'
              },
            );
            const results = await fetch(
              `https://api.foursquare.com/v3/places/search?${searchParams}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  Authorization: 'fsq3Y2W2zsFSPy5fDyCjzxmD1FYHj6mCA7vKlEVIPdirgEA=',
                }
              }
            );
            const data = await results.json();

            const filteredData = data.results.map(item => ({
              name: item.name,
              category: item.categories,
              address: item.location.formatted_address,
              geocodes: {
                latitude: item.geocodes.main.latitude,
                longitude: item.geocodes.main.longitude,
              },
            }));
        
            console.log(filteredData);

            setData(filteredData);
        } catch(e){
            console.error("error fetching data:", e);
        }
    };

    const columns = useMemo(
        () => [
            {Header: "Name", accessor: "name"},
            {Header: "Category", accessor: "categories.name"},
            {Header: "Address", accessor: "location.formatted_address"},
            {Header: 'Geocodes', accessor: 'geocodes.main' }
        ],
        []
    ); 
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({ columns, data });

    

    return (
        <div className="table-container">
          <table {...getTableProps()}>
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
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
};

export default CoffeeMel;