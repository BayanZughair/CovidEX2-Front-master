import * as React from 'react';
import {useState} from "react";
import Api from "./Api";
import Field from "./Field";
import ChooseField from "./ChooseField";
import './table.css';

function Registration(props) {
    const [inputs, setInputs] = useState({city: ''});
    const [checkedState, setCheckedState] = useState({
        is_covid_19_infected: {
            checked: false, title:"Have you been infected by COVID-19?"
        }, have_diabetes: {
            checked: false, title:"Diabetes"
        }, have_cardio_problems: {
            checked: false, title:"Cardio-Vascular problems"
        }, have_allergies: {
            checked: false, title:"Allergies"
        },
    })
    const handleChange = (event) => {
        const name = event.target.name;
        const userInput = event.target.value;
        setInputs(values => ({...values, [name]: userInput}));
    };
    const trimInputs = () => {
        let submitObject = {};
        for (const property in inputs) {
            if (typeof inputs[property]) {
                submitObject[property] = inputs[property].trim();
            }
        }
        setInputs(submitObject)
    }
    const setForm = () => {
        let submitObject = {};
        for (const property in inputs) {
            if (typeof inputs[property]) {
                submitObject[property] = "";
            }
        }
        setInputs(submitObject)
        const returnedTarget = Object.assign({}, checkedState);
        Object.entries(checkedState).map((checked) => {
            const condition = checked[0]
            returnedTarget[condition]["checked"] = false
        })
        setCheckedState(returnedTarget)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        trimInputs();
        if (!Object.keys(inputs).includes("have_other_medical_conditions")) {
            inputs["have_other_medical_conditions"] = null;
        }
        const data = Object.assign({}, inputs);
        Object.entries(checkedState).map((name) => {
            const condition = name[0]
            const isIll = name[1]["checked"]
            data[condition] = isIll;
        })
        const url = Api.userDbURL;
        await fetch(url, {method: "POST", body: JSON.stringify(data)})
            .then(Api.status) 
            .then(setForm)
            .catch(() => {
            })
            .finally(() => {
            });
    };
    const handleCheck = (condition) => {
        const returnedTarget = Object.assign({}, checkedState);
        returnedTarget[condition]["checked"] = !returnedTarget[condition]["checked"]
        setCheckedState(returnedTarget)
    }
    return (<>
        <div className='row'>
            <div className="col-4 col-md-4">
                <h3>Our Goal:</h3>
                <p>
                    Our goal is to help undeveloped countries vaccinate their people! <br />
                    Where some countries do not keep electronic records of their citizens medical situation.<br />
                    So we want to help them to collec data from citizens to prioritise COVID-19 vaccination.
                </p>
                <h1>Registration Form:</h1><br/>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Field name="first_name" title="First Name:" type="text" isRequired={true}
                                placeholder="Enter First Name" data={inputs.first_name} handleChange={handleChange} />
                        <Field name="last_name" title="Last Name:" type="text" isRequired={true}
                                placeholder="Enter Last Name" data={inputs.last_name} handleChange={handleChange}/>
                        <Field name="birth_date" title="Date of birth:" type="date" isRequired={true}
                               data={inputs.birth_date} handleChange={handleChange}/>
                        <Field name="address" title="Address:" type="text" isRequired={true}
                                placeholder="Enter Your Address"  data={inputs.address} handleChange={handleChange}/>
                        <label htmlFor="city" className="form-label">Choose a city:</label>
                            <ChooseField defaultValueID={''} defaultValueText="Choose a city" disableDefault={true}
                                     name='city' onChange={handleChange} value={inputs["city"]}
                                     options={[
                                         {value: "Jerusalem", name: "Jerusalem"},
                                         {value: "Tel Aviv", name: "Tel Aviv"},
                                         { value: "Ramallah", name: "Ramallah"},
                                         { value: "Haifa", name: "Haifa"},
                                         { value: "Nablus", name: "Nablus"},
                                         { value: "Tiberias", name: "Tiberias"},
                                     ]}
                        />
                        <Field name="zip_code" title="Zip code:" type="number" min={0}
                               isRequired={false} data={inputs.zip_code} value={inputs["city"]}
                               handleChange={handleChange}/>
                        <Field name="landline" title="Land line:" type="text" isRequired={true}
                                placeholder="Enter Land line" data={inputs.landline} handleChange={handleChange}/>

                        <Field name="cellular_phone" title="Cellular phone:" type="text"
                                placeholder="Enter Cellular phone" isRequired={true} data={inputs.cellular_phone} handleChange={handleChange}/>
                        <ul className="list-unstyled">
                            {Object.entries(checkedState).map((condition) => {
                                return (<li key={condition[0]}>
                                    <div className="conditions-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${condition[0]}`}
                                                name={condition[0]}
                                                value={condition[0]}
                                                checked={condition[1]["checked"]}
                                                onChange={() => handleCheck(condition[0])}
                                            />
                                            <label
                                                htmlFor={`custom-checkbox-${condition[0]}`}>{condition[1]["title"]}</label>
                                        </div>

                                    </div>
                                </li>);
                            })}
                        </ul>
                        <Field name="have_other_medical_conditions" title="Other:"
                                placeholder="Enter any other previous conditions" type="text" isRequired={false} value="" handleChange={handleChange}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            </div>
            </div>
    </>);
}
export default Registration;