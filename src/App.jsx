import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Plan } from './Plan'
import { useState } from 'react'

const App = ()=>{

    const [state, setState] = useState({
        items: [],
        text: "",
    })

    const handleChange = (e)=>{
        setState({
            ...state,
            ["text"]: e.target.value,
        })
    }

    const handleAdd = (e)=>{
        e.preventDefault();
        if(state.text !== ""){
            const items = [...state.items, state.text];

            setState({
                items: items,
                text: ""
            })
        }
    }

    const handleDelete = (key)=>{
        const items = state.items;
        const newItems = items.filter((item, index)=>{
            return index !== key;
        })

        setState({
            ...state,
            ["items"]: newItems,
        })
    }

    return(
        <div className='container-fluid my-5'>
            <div className="row">
                <div className="col-sm-6 mx-auto  text-white shadow-lg p-3">
                    <h1 className="text-center">TODO App</h1>
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className='form-control text-white' placeholder='Write Plan Here' value={state.text} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-warning px-5 fw-bold w-100 my-2' onClick={handleAdd}>ADD</button>
                        </div>
                        <div className="container-fluid">
                            <ul className="list-unstyled row m-5">
                                {
                                    state.items.map((item, index)=>{
                                        return <Plan key={index} id={index} text={item} click={handleDelete}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;