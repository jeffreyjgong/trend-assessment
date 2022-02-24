import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'


const startList = [
  { name: "Jill McCasky", lastTransaction: "February 1, 2022", netPromoterScore: 9, contact: 6103453456},
  { name: "Jill McCasky", lastTransaction: "February 1, 2022", netPromoterScore: 9, contact: 6103453456},
  { name: "Jill McCasky", lastTransaction: "February 1, 2022", netPromoterScore: 9, contact: 6103453456},
  { name: "Jill McCasky", lastTransaction: "February 1, 2022", netPromoterScore: 9, contact: 6103453456}
]

function App() {

  const [data, setData] = useState(startList);
  const columns = [
    { title: "Name", field: "name" },
    { title: "Last Transaction", field: "transaction" },
    { title: "Net Promoter Score", field: 'score' },
    { title: "Contact", field: 'phone', }
  ]

  return (
    <div className = "App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Material Table with CRUD Operations</h4>
      <MaterialTable
        title="All Clients"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, newRow]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })
          
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default App;
