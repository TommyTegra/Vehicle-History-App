import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddServicePageTable = () => {

    const [service, setService]       = useState('');
    const [mileage, setMileage]         = useState('');
    const [date, setDate] = useState();
    
    const redirect = useNavigate();

    const addService = async () => {
        const newService = { service, mileage, date };
        const response = await fetch('https://vehicle-history-backend.onrender.com/serviceLogs', {
            method: 'post',
            body: JSON.stringify(newService),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Success: Creation of new service log accomplished (201).`);
        } else {
            alert(`Failure: Could not create new service log. = ${response.status}`);
        }
        redirect("/history");
    };


    return (
        <>
        <article>
            <h2>Add a service log</h2>
            <p>Please complete the fields in regards to the service log you are adding.</p>
            
            <table id="service">
                <caption>What service are you adding?</caption>
                <thead>
                    <tr>
                        <th>Service Log</th>
                        <th>Mileage</th>
                        <th>Date</th>
                        <th>Confirm</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="service">Service performed</label>
                        <input
                            type="text"
                            placeholder="e.g. Oil change"
                            value={service}
                            onChange={e => setService(e.target.value)} 
                            id="service" />
                    </td>

                    <td><label for="mileage">Mileage at service</label>
                        <input
                            type="number"
                            value={mileage}
                            placeholder="e.g. 50000"
                            onChange={e => setMileage(e.target.value)} 
                            id="mileage" />
                    </td>

                    <td><label for="date">Date of service</label>
                        <input
                            type="text"
                            placeholder="e.g. 1-1-2023"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Submit</label>
                        <button
                            type="submit"
                            onClick={addService}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
};

export default AddServicePageTable;