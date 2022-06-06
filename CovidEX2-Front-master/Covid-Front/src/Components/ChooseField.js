import * as React from 'react';

function ChooseField(props) {

    return (
        <>
            <select required className="form-select" name={props.name} onChange={props.onChange} value={props.value}>
                <option value={props.defaultValueID} disabled={props.disableDefault}>{props.defaultValueText} </option>
                {props.options.map(option =>
                {
                    return (<option key={option.value} value={option.value}>{option.name} </option>)
                })}
            </select>
        </>
    );
}
export default ChooseField;