import React from "react";
import { Link } from 'react-router-dom';
import { VscNewFile } from 'react-icons/vsc'

function TableHead() {
    return (
        <thead>
            <tr>
                <th title="Upon clicking the delete icon, the log will be deleted instanteously.">Delete</th>
                <th title="Name of the service that was performed.">Service</th>
                <th title="Mileage at time of service">Mileage</th>
                <th title="Date at time of service">Date</th>
                <th title="Clicking Edit will redirect you to a new page to perform the editing.">Edit</th>
                <th><Link to="../addService"><i><VscNewFile title="Add a service log" ></VscNewFile></i></Link></th>

            </tr>
        </thead>
    );
}

export default TableHead;