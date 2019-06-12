import React from 'react';
const Person = (props) => {
    return (
        <div>
            I'am {props.name} and {props.age} years old.
            <input type="text" value={props.name} onChange={props.handleChange}/>
        </div>
    )
}
export default Person;