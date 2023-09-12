import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HistoryTable from '../components/HistoryTable';

function HistoryPage({ setService }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [services, setServices] = useState([]);

    // RETRIEVE the entire list of services
    const loadServices = async () => {
        const response = await fetch('https://vehicle-history-backend.onrender.com/serviceLogs');
        const services = await response.json();
        setServices(services);
    } 
    

    // UPDATE a single service
    const onEditService = async service => {
        setService(service);
        redirect("/editService");
    }


    // DELETE a single service  
    const onDeleteService = async _id => {
        const response = await fetch(`/serviceLogs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('https://vehicle-history-backend.onrender.com/serviceLogs');
            const services = await getResponse.json();
            setServices(services);
        } else {
            console.error(`Failure: Unable to delete service log. ID = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the services
    useEffect(() => {
        loadServices();
    }, []);

    // DISPLAY the services
    return (
        <>
            <h2>History List of Service Logs</h2>
            <p>Please use the icon associated with the action you would like to perform, such as, 
                adding, editing, or deleting a service log.
            </p>
            <HistoryTable 
                services={services} 
                onEdit={onEditService} 
                onDelete={onDeleteService} 
            />
        </>
    );
}

export default HistoryPage;