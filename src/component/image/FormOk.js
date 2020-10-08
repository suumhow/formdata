/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Select from 'react-select';
import { options, stringToFormData , formDataToString} from './data';



function Formok(props) {
    const [color, setcolor] = useState({ value: 'chocolate', label: 'Chocolate' },)
    const [data, setData] = useState(stringToFormData('techno acid electro house'))

   
    const onSubmit = e => {
        
        e.preventDefault()
        console.log('goal', color)
        console.log('data', data)
        console.log('datatransformation', formDataToString(data))
    }
    return (    
        <div>
            <form onSubmit={onSubmit}>
                <Select
                    defaultValue={[options[2], options[3]]}
                    value={data}
                    isMulti
                    isSearchable
                    isClearable
                    blurInputOnSelect={true}
                    noOptionsMessage = {() => 'no more options...'}
                    name="style"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={setData}
                />
                <button>validate</button>

            </form>
                            

        </div>
    )
}


export default Formok


