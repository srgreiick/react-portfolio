import React, { useEffect, useState } from "react"
import "./style.css";
import {repos} from "../../utils/API";
// import Name from "./Name/EmpName"
// import Email from "./Email/EmpEmail"


//Table and sort functions taken from https://www.smashingmagazine.com/2020/03/sortable-tables-react/ 
const useSortableData = (items, config = null) => {

  // console.log(items);
  const [sortConfig, setSortConfig] = React.useState(config);



  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  // console.log(props);
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              URL
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('stock')}
              className={getClassNamesFor('stock')}
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.url}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App(data) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // console.log(repos);
    repos
    
    .then(json =>
      
        
      // console.log(json.data)
      json.data.map(data => ({
          name: `${data.full_name}`,
          url: `${data.git_url}`,
          // id: result.registered.date,
          // photo: result.picture.thumbnail,
          // email: result.email,
          // phone: result.phone
      }))
      
  )
  .then(newData => setEmployees(newData ))

  
      // .then(res => {
      //   final = 
      //   setEmployees(res.data.results)
      //   console.log(res.data.results);
        
      // })
      .catch(err => console.log(err));
  }, []);




  return <ProductTable products={employees}/>
}
