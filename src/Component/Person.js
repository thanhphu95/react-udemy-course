import React from 'react';

const Person = (props) => {
    const { id, name, age, handleChange } = props;
    return (
        <div>
            I'am {name} and {age} years old.
            <br/>
            <input className="margin-top-10" type="text" value={name} onChange={()=> {handleChange(event, id)}}/>
        </div>
    )
    
}
export default Person;
