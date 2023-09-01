import { useState } from 'react'

export default function Experience({ onQuery }) {
    const [fields, setFields] = useState({
        fullName : '',
        email : '',
        number : ''

    });


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFields(values => ({...values, [name]: value}))
      }

    function handleSubmit(e) {
        e.preventDefault();
        prompt(fields.fullName, fields.email, fields.number)
    }

    // function handleTextChange(e) {
    //     //
    // }


    return(
        <form onSubmit={handleSubmit}>
            <label>
            Full Name:
            <input
                type="text" 
                name="fullName"
                value={fields.fullName} 
                onChange={handleChange}
            />
            </label>
            <label>
            Email:
            <input
                type="text" 
                name="email" 
                value={fields.email}
                onChange={handleChange}
            />
            Number:
            <input
                type="number" 
                name="number" 
                value={fields.number}
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