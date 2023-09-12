import React from "react";
import { VscTrash, VscEdit } from 'react-icons/vsc';

function HistoryRow({ service, onDelete, onEdit}) {
    return (
        <tr>
            <td><i onClick={() => onDelete(service._id)} title="Click to delete"><VscTrash /></i></td>
            <td title="Name of the service performed">{service.service}</td>
            <td title="Mileage at time of service">{service.mileage}</td>
            <td title="Date at time of service">{service.date.slice(0,10)}</td>
            <td><i><VscEdit onClick={() => onEdit(service)} title="Editing will update log"></VscEdit></i></td>
            <td></td>
        </tr>
    );
}

export default HistoryRow;