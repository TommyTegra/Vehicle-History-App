import React from 'react';
import Service from './Service';

function ServiceList({ services, onDelete, onEdit }) {
    return (
        <table id="services">
            <caption>Add and Edit Services</caption>
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Mileage</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {services.map((service, i) => 
                    <Service 
                        service={service} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ServiceList;
