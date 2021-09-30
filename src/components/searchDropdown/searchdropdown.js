import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import './searchDropdown.module.css'

const Searchdropdown = props => {

    const [employees, setEmployees] = useState([]);
    const [req , setReq] = useState({
        clientName:"",
        projectName:""
    })

    const [ projectlist, setProjectList] = useState([]);

    useEffect( () => {
        loademployees();
    } ,[]);

    const loademployees = async() => {
        const result = await axios.post("http://localhost/4010/employees.js");
        setEmployees(result.data.reverse());
    };

    //Code for Select Clients on Employee Click

    const selectClient = (e) => {
        let name  = e.target.name;
        let value = e.target.value;
        req[name] = value;
        var data = value;
        alert(data);

        var response = fetch("http://localhost/4010/clients.js" , {
            method : "POST",
            headers :{
                "Content-Type" : "application/json",
            },
            body:JSON.stringify({id : data}),
        }).then(function(response){
            return response.json();
        })
        .then(function(myJSON)
        {
            setReq(myJSON)
        })
    };

    const abc= props.options;
    console.log(abc);
     
    const options = [
        { key: 'af', value: 'af',  text: 'Harpreet' },
        { key: 'ax', value: 'ax',  text: 'Jason' },
        { key: 'al', value: 'al',  text: 'Vinayak' },
        { key: 'dz', value: 'dz', text: 'Ashish' },
        { key: 'as', value: 'as',  text: 'Nikhil' },
        { key: 'ad', value: 'ad',  text: 'Renuka' } 
        
    ];

    return (
        <div>
    <Dropdown
        placeholder='Select Employee'
        fluid
        search
        selection
        disabled = {props.disabledflag}
        options={options}
    />

        </div>
    );
};

export default Searchdropdown;