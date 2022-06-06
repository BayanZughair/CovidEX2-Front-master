import * as React from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';
import Api from "./Api";
import Field from "./Field";
import ChooseField from "./ChooseField";
import './table.css';

function Summary(props) {
    const [data, setData] = useState({});
    const [dates, setDates] = useState({});
    const [city, setCity] = useState("");
    const handleDatesChange = (event) => {
        const name = event.target.name;
        const userInput = event.target.value;
        setDates(values => ({...values, [name]: userInput}));
    };
    const filterCity = async (event) => {
        event.preventDefault(); 
        const outputd = await axios.get(Api.getByCityURL(city))
        setData(outputd.data);
    }
    const filterDates = async (event) => {
        event.preventDefault();
        const outputd = await axios.get(Api.getByDateURL(dates.from, dates.t))
        setData(outputd.data);
    }
    useEffect(() => {
        const fetchData = async () => {
            const outputd = await axios(Api.userDbURL);
            setData(outputd.data);
        };
        fetchData();
    }, []);
 
    return (
        <>
            <div className="row t">
                <div className="col-4">
                    <form onSubmit={filterDates}>
                        <Field name="from" title="Starting date"type="date" isRequired={true}
                            data={dates.from} handleChange={handleDatesChange} />
                        <Field name="till" title="Ending date" type="date" isRequired={true}
                            data={dates.till} handleChange={handleDatesChange} />
                        <button type="submit" className="btn btn-primary">Filter by dates</button>
                    </form>
                </div>
                <div className="col-4 my-2">
                    <br/>
                    <form onSubmit={filterCity}>
                        <ChooseField defaultValueID={''} defaultValueText="Choose a city" disableDefault={true}
                                     name='city' onChange={event => setCity(event.target.value)} value={city}
                                     options={[
                                         { value: "Jerusalem", name: "Jerusalem" },
                                         { value: "Tel Aviv", name: "Tel Aviv" },
                                         { value: "Ramallah", name: "Ramallah" },
                                         { value: "Haifa", name: "Haifa" },
                                         { value: "Nablus", name: "Nablus" },
                                         { value: "Tiberias", name: "Tiberias" },
                                     ]}
                        />
                        <br/>
                        <button type="submit" className="btn btn-primary">Filter by City</button>
                    </form>
                </div>
                <div className="col-4">
                    <br/>
                    <br/>
                    <br/>
                    <a className="btn btn-primary my-3" href={Api.exportTableToExcelURL} role="button">Export the table
                        to Excel</a>
                </div>
            </div>
            <br/>
            <br/>
            <table className="table t">
                <thead>
                <tr>
                    <th scope="col">#id</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">dateOfBirth</th>
                    <th scope="col">address</th>
                    <th scope="col">city</th>
                    <th scope="col">zipCode</th>
                    <th scope="col">landLine</th>
                    <th scope="col">cellularPhone</th>
                    <th scope="col">infected</th>
                    <th scope="col">diabetes</th>
                    <th scope="col">cardio-Vascular</th>
                    <th scope="col">allergies</th>
                    <th scope="col">other</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.values(data).map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.birth_date}</td>
                            <td>{patient.address}</td>
                            <td>{patient.city}</td>
                            <td>{patient.zip_code}</td>
                            <td>{patient.landline}</td>
                            <td>{patient.cellular_phone}</td>
                            <td className={patient.is_covid_19_infected ? "":""}>
                                {patient.is_covid_19_infected ? "Yes":"No"}</td>
                            <td className={patient.have_diabetes ? "":""}>
                                {patient.have_diabetes ? "Yes" : "No"}</td>
                            <td className={patient.have_cardio_problems ? "":""}>
                                {patient.have_cardio_problems ? "Yes":"No"}</td>
                            <td className={patient.have_allergies ? "":""}>
                                {patient.have_allergies ? "Yes":"No"}</td>
                            <td>{patient.have_other_medical_conditions}</td>

                            <td/>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>);
}
export default Summary;