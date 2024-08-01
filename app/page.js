"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [importantTask, setimportantTask] = useState([])
    const submitTask = (e) => {
        e.preventDefault()
        setimportantTask([...importantTask, {title, description}]);
        settitle("")
        setdescription("")
    }
    const deleteTask = (i) => {
        let previousTask = [...importantTask]
        previousTask.splice(i,1)
        setimportantTask(previousTask)
    }

    let renderingTask = <h2>No Task Available</h2>
    // maps the task(t), and index(i)
    if(importantTask.length > 0){
        renderingTask = importantTask.map((t,i)=>{
            return( 
            <li key={i} className='flex items-center justify-between mb-9'>
                <div className='flex items-center justify-between mb-6 w-2/3'>
                    <h5 className='text-2xl font-semibold'>{t.title}</h5>
                    <h6 className='text-lg font-medium'>{t.description}</h6>
                </div>
                <button 
                onClick={()=>{
                    deleteTask(i)
                }}
                className='bg-red-500 text-white px-4 py-2 rounded font-bold'>
                Delete
                </button>
            </li>
        )})
    }
    return (
        <>
            <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo List</h1>
            <form onSubmit={submitTask}>
                <input type='text' 
                className='text-2xl border-zinc-800 border-2 m-5 px-6 py-3'
                placeholder='Enter Task here'
                value={title}
                onChange={(e)=>{
                    settitle(e.target.value)
                }}
                ></input>
                <input type='text' 
                className='text-2xl border-zinc-800 border-2 m-5 px-6 py-3'
                placeholder='Enter Description here'
                value={description}
                onChange={(e)=>{
                    setdescription(e.target.value)
                }}
                ></input>
                <button className='bg-black text-white px-6 py-3 m-5 text-2xl font-bold rounded' 
                >Add Task</button>
            </form>
            <div className='bg-slate-400 p-8'>
                <ul>
                    {renderingTask}
                </ul>
            </div>
        </>
    )
};

export default page