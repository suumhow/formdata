import React, { useState} from 'react';
import { useForm } from 'react-hook-form'
import Select from 'react-select';
import { options, stringToFormData, formDataToString } from './data';


function Form() {
    const [data, setData] = useState(stringToFormData('techno acid electro house'))
    const [mainData, setMainData] = useState({})
    

    const onSubmit = (d) => {
        console.log('d: ', d);
        setMainData(d,data)
        
        console.log('mainData: ', mainData);
        console.log(data);
     };
    const { register, handleSubmit } = useForm()

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Form</h1>
                <label>Name input</label>
                <input type='text' name='name' ref={register} />

                <label>age input</label>
                <input type='number' name='number' ref={register} />
                <textarea cols='30' rows="5" name="text" ref={register}/>
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
                <label>Skills</label>
                <input type="radio" name="style" value="baseline"></input>
                <input type='submit' />

            </form>

        </>


    )
}

export default (Form)