import React, { useState } from 'react'

export default function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstNameVal, setFirstNameVal] = useState(false)
    const [lastNameVal, setLastNameVal] = useState(false)
    const [emailVal, setEmailVal] = useState(false)
    const [passwordVal, setPasswordVal] = useState(false)

    /**
     * function : handleSubmit 
     * @param {*} e 
     * description: handle the form submit with validations and capturing the the inputs
     * Author: Vinit Joshi
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let regex = /^[a-z_0-9]{2,24}@[a-z]{2,10}[\.][a-z]{2,3}$/
        let regexforpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,15}$/

        if (firstName.length < 3 || firstName.length>30) { // first name required, min and max condition
            setFirstNameVal(true); setLastNameVal(false); setEmailVal(false); setPasswordVal(false);
        }
        else if (lastName.length < 3 || lastName.length>30) { // last name required, min and max condition
            setFirstNameVal(false); setLastNameVal(true); setEmailVal(false); setPasswordVal(false);
        }
        
        else if (!regex.test(email) || email.length > 40) { // email required, valid email check condition
            setFirstNameVal(false); setLastNameVal(false); setEmailVal(true); setPasswordVal(false);
        }
        else if (!regexforpass.test(password)) { // password required, password check regex condition
            setFirstNameVal(false); setLastNameVal(false); setEmailVal(false); setPasswordVal(true);
        }
        else { //passed all conditions capturing the data and consoled it
            setFirstNameVal(false); setLastNameVal(false); setEmailVal(false); setPasswordVal(false);

            //alerting the captured inputs
            alert('firstName => '+firstName);
            alert('lastName => '+lastName);
            alert('email => '+email);
            alert('password => '+password);

            let data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }

            console.log(data);
        }

    }
    return (
        <div className="form">
            <form className="form-res" onSubmit={(e) => handleSubmit(e)}>
                <div className='title'>FORM</div>
                <div >
                    <div className='form-div'>
                        <label htmlFor="firstname">First Name *</label>
                        <div className="validation-div">
                            <input id="firstname" data-testid="testinput1" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            {firstNameVal && <div><small>cannot be less than 3 and more than 30 characters</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="lastname"> Last Name *</label>
                        <div className="validation-div">
                            <input id="lastname" data-testid="testinput2" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                            {lastNameVal && <div><small>cannot be less than 3 and more than 30 characters</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="email">Email *</label>
                        <div className="validation-div">
                            <input id="email" data-testid="testinput3" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            {emailVal && <div><small>Please enter a valid email address</small></div>}
                        </div>
                    </div>
                    <div className='form-div'>
                        <label htmlFor="password">Password *</label>
                        <div className="validation-div">
                            <input id="password" data-testid="testinput4" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            {passwordVal && <div><small>The password should contain a combination of numbers, letters mixed case and must be greater than 6 characters</small></div>}
                        </div>
                    </div>
                </div>
                <button type="submit" className='button'>Submit</button>
            </form>
        </div>
    )
}
