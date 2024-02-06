import React, { useState } from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesorce';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


function DataTable() {

  const {data, loading, error} = useFetch("/users")

 const handleDelete = (id) =>{
  // setData(data.filter((item)=>item.id !== id))
 }
  const actionColumn = [
    {
      feild:"action",
      headerName:"Action",
      width:200,
      renderCell: (params) =>{
        return(
          <div className="cellAction">
            <Link to="/users/test"  className='link' style={{textDecoration:"none"}}>
            <div className="viewButton" >View</div>
            </Link>
            <div className="deleteAction" onClick={()=>handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className='link'>
          Add New
        </Link>
      </div>
       <DataGrid
       className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}       
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={row => row._id}
      />
    </div>
  )
}

export default DataTable
