import React, { useState } from 'react';

const Form = (props) => {
    console.log(props);
    const [formBox, setFormBox] = useState({name: "", email: "", role: "",});

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormBox({...formBox, [name]: value})
    };

    const handleSubmit = (event) => {
            event.preventDefault();
            props.formAddition(formBox);
        }
    return (
        <form onSubmit={event => handleSubmit(event)}>
          <input type="text" name="name" placeholder="Name" onChange={event => handleChange(event)} />
          <input type="email" name="email" placeholder="Email" onChange={event => handleChange(event)} />
          <input type="text" name="role" placeholder="Role" onChange={event => handleChange(event)} />
          <button>Enter</button>
        </form>
    );
}
export default Form;
