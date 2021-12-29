import React, { useState } from 'react';
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    async function register() {
        if(password !== confirmPassword) {
            window.alert("Password Mismatch")
            return;
        }
        if(email ==="" || password ==="") {
            window.alert("Email or password cannot be empty")
            return;
        }
        const response = await axios.post("/api/user/register", {
            email: email,
            password: password
        });
        console.log(response.data)

    }
    return ( 
        <div>
            <Input name="email" value={email} setValue={setEmail}/>
            <Input name="password" value={password} setValue={setPassword} inputType="password"/>
            <Input name="confirm password" value={confirmPassword} setValue={setConfirmPassword} inputType="password"/>
            <Button onClickHandler={register} label="register"/>
        </div>
     );
}
 
export default Register;