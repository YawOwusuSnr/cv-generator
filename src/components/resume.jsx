import { useState } from 'react'
import Personal from './personal.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'

export default function Resume() {
    const [query, setQuery] = useState("")
    const [education, setEducation] = useState("")

    return(
    <>
    <h1>{query.fullName}</h1>
    <div
        className='personal-data'>
        <h4>{query.email}</h4>
        <h4>{query.number}</h4>
    </div>
    
    <Personal onQuery={setQuery}/>
    <Education onQuery={setEducation}/>
    </>
    )
}