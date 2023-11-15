import React from 'react'
import { useState } from 'react';
function StudentForm() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [sem, setSem] = useState("");

    const [branch, setBranch] = useState("");

    const [usn, setUsn] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {

            name: name,
            email: email,
            usn:usn,
            phone: phone,
            sem: sem,
            branch: branch,
        };
        console.log(data);

        // send data to an API
    };



    return (
        <div class="container" >
            <h1>Student Registration Form</h1>
            <h3>please fill your details below</h3>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    placeholder="Enter your name"

                    value={name}

                    onChange={(e) => setName(e.target.value)}
                />

                <input

                    type="email"

                    placeholder="Enter your email"
                    values={email}

                    onChange={(e) => setEmail(e.target.value)}
                />


                <input

                    type="text"

                    placeholder="Enter your number"

                    value={phone}

                    onChange={(e) => setPhone(e.target.value)}
                />
                

                <input
                 type="text"
                  placeholder="Enter your USN" 
                  value={usn}

                    onChange={(e) => setUsn(e.target.value)}
               />

                <input

                    type="text"

                    placeholder="Enter your sem"

                    value={sem}

                    onChange={(e) => setSem(e.target.value)}
                />
                
               <div class="input-box">

                   <select name="dept" value={branch} onChange={(e)=> setBranch(e.target.value)}>

                        <option>CSE</option>
                        <option>CIVIL</option>
                        <option>ISE</option>
                        <option>MECH</option>
                        <option>CSBS</option>
                        <option>AIML</option>
                        <option>EC</option>
                    </select>
                </div>  
                
  <div class="gender-options">
    <label for="male">
      <input type="radio" id="male" name="gender" value="male"/> <b>Male</b>
    </label>
    <label for="female">
      <input type="radio" id="female" name="gender" value="female"/> <b>Female</b>
    </label>
    </div>
                <button><b>Submit</b></button>

            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{usn}</p>
            <p>{sem}</p>
        </div>
    )
}

export default StudentForm