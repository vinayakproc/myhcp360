import React from "react";
import { MDBDataTable } from 'mdbreact';
import './Sortable.css'

const SortableTableList = props => {
    
      return (
        <MDBDataTable
       
          entries={5}
          entriesOptions={[ 5, 10, 15 ]}
          striped
          bordered
          hover
          data={props.data}
          responsive
          className="table-styles SearchFeature thead-styles"
        
          
        />
      );

}

export default SortableTableList;