import React from 'react'
import Input from '../shared/formsElement/Input';
import { useForm } from '../shared/hooks/form-hook';
import {
    // VALIDATOR_EMAIL,
    // VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
  } from "../shared/formsElement/validators";
function MainForm(props) {
    const [formstate, inputHandler, setformdata] = useForm({
        email: {
          value: "",
          isValid: true,
        },
        name: {
          value: "",
          isValid: true,
        },
        date: {
            value: "",
            isValid: true,
        },
        phonenumber: {
            value: "",
            isValid: true,
        },
        address: {
            value: "",
            isValid: true,
        }
      });
    console.log(formstate)
    return(<div>
        <Input
              element="input"
              id="name"
              type="name"
              label="Name"
              validators={[VALIDATOR_REQUIRE()]}
             onInput={inputHandler}
            />
        <Input
              element="input"
              id="email"
              type="email"
              label="Email"
              validators={[VALIDATOR_REQUIRE()]}
             onInput={inputHandler}
            />
        <Input
              element="input"
              id="date"
              type="date"
              label="Date"
              validators={[VALIDATOR_REQUIRE()]}
             onInput={inputHandler}
            />
        <Input
              element="input"
              id="phonenumber"
              type="phonenumber"
              label="Phone Number"
              validators={[VALIDATOR_REQUIRE()]}
             onInput={inputHandler}
            />
        <Input
              element="input"
              id="address"
              type="address"
              label="Address"
              validators={[VALIDATOR_REQUIRE()]}
             onInput={inputHandler}
            />
    </div>)
}
export default MainForm;