import { useState } from 'react'

export default function Education({ omQuery }) {
    const [fields, setFields] = useState({
        school : '',
        degree : '',
        location : ''

    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFields(values => ({...values, [name]: value}))
      }

    function handleSubmit(e) {
        e.preventDefault();
        prompt(fields.school, fields.degree, fields.location)
    }

    

    return(
        <form onSubmit={handleSubmit}>
            <label>
            School:
            <input
                type="text" 
                name="school"
                value={fields.school} 
                onChange={handleChange}
            />
            </label>
            <label>
            Degree:
            <input
                type="text" 
                name="degree" 
                value={fields.degree}
                onChange={handleChange}
            />
            Location:
            <input
                type="text" 
                name="location" 
                value={fields.location}
                onChange={handleChange}
            />
            <input 
                type="submit" 
                value="Submit" 
            />
            </label>
        </form>
    );
}