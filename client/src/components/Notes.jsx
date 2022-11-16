import React from 'react'

export default function Notes() {
    return (
        <ul className='list'>
            <li className='list_item'>
<div className='note'>
    <button className='note__delete-button'>x</button>
    <button className='note__update-button'>update</button>
    <button className='note__add-button'>add files</button>
 <p>Name of task</p>
 <p>Description</p>
 <p>Date of ending</p>
 <p>File of note</p>
</div>
            </li>
        </ul>
    )
}
