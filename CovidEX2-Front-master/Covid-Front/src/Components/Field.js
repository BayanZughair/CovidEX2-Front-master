import * as React from 'react';

function Field(props) {
    return (<>
        <div className="mb-3 col">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input type={props.type}
                   name={props.name}
                   className="form-control"
                   id={props.name}
                   onChange={props.handleChange}
                   placeholder={props.placeholder}
                   required={props.isRequired}
                   value={props.data ? props.data : ""}
            />
        </div>
    </>);
}
export default Field;