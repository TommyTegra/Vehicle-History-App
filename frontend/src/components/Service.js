import React from 'react';
import { VscTrash, VscEdit } from 'react-icons/vsc';

function Service({ service, onDelete, onEdit }) {
    return (
        <tr>
            <td>{service.service}</td>
            <td>{service.mileage}</td>
            <td>{service.date}</td>
            <td><i><VscTrash onClick={() => onDelete(service._id)} /></i></td>
            <td><i><VscEdit onClick={() => onEdit(service)} /></i></td>
        </tr>
    );
}

export default Service;