import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditServicePageTable = ({ serviceToEdit }) => {
 
    const [service, setService]         = useState(serviceToEdit.service);
    const [mileage, setMileage]         = useState(serviceToEdit.mileage);
    const [date, setDate]               = useState(serviceToEdit.date);
    
    const redirect = useNavigate();

    const editService = async () => {
        const response = await fetch(`/serviceLogs/${serviceToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                service: service, 
                mileage: mileage, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Success: Service log was successfully edited (200).`);
        } else {
            const errMessage = await response.json();
            alert(`Failure: Unable to edit service log. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/history");
    };

    return (
        <>
        <article>
            <h2>Edit a service log</h2>
            <p>Please update the desired fields to the service log.</p>
            <table id="services">
                <caption>What fields are you editing?</caption>
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
                            value={date.slice(0,10)}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Submit</label>
                        <button
                            type="submit"
                            onClick={editService}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default EditServicePageTable;