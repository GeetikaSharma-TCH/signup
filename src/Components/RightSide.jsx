import React, { useState } from 'react';
const RightSide = () => {

    const [userData, setUserData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        code:"",
        phoneNumber:"",
        course:""
    })

    // const [ enableSubmit, setSubmit] = useState(false)
    const [commonError, setCommonError] = useState({})


    // call when input change
    const onChangeInput = (event) => {
        event.preventDefault()
        console.log('event', event, event.target.name, event.target.value)

        setUserData({ ...userData, [event.target.name]: event.target.value })
        console.log('uswerData === ', userData)
        console.log('uswerData.course === ', event.target.value)

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const phoneRegex = /^[0-9]\d{9,9}$/g
        if (event.target.name === 'firstname' && userData.firstname.length <= 5) {
          setCommonError({ ...commonError, firstname: 'Minimum 5 charcters required' })
          console.log('commonError', commonError)
        } else if (event.target.name === 'email' && userData.email.length >= 0 && !emailRegex.test(userData.email)) {
          setCommonError({ ...commonError, email: 'Please enter a valid email address' })
        } else if (event.target.name === 'lastname' && userData.lastname.length <= 5) {
          setCommonError({ ...commonError, lastname: 'Minimum 5 charcters required' })
        } else if (event.target.name === 'course' && userData.course === 'Select course') {
          setCommonError({ ...commonError, course: 'Select at least one option' })
        }else if (event.target.name==="phoneNumber" && typeof(userData.phoneNumber) !== 'number' && !phoneRegex.test(userData.phoneNumber)) {
            setCommonError({ ...commonError, phoneNumber: 'Enter digit only and digit should be 10' }) 
        }else {
            console.log('else===')
        //   setCommonError({ ...commonError, firtsname: '', email: '', lastname: '', course: '', phoneNumber: '', code : '' })
        }
        // setSubmit(true)
        console.log('commomError',commonError)
        console.log('userData',userData)

    }

    // Submit Button 
    const onSubmitData = (event) => {
        event.preventDefault()
        console.log('userdata on submit', userData)
        // //alert('Sign Up Suceesfully')
        // if(userData.firstname === '' || 
        //     userData.lastname === '' ||
        //     userData.email === '' ||
        //     userData.code === '' ||
        //     userData.phoneNumber === '' ||
        //     userData.course === '' ) {
        //     setSubmit(false)
        // }
        // setUserData({
        //     firstname:"",
        //     lastname:"",
        //     email:"",
        //     code:"",
        //     phoneNumber:"",
        //     course:""
        // })
    } 
    return (
        <div className="formData">
            <div className="card formCard">
                <div className="card-body">
                    <span>Sign up now and get full access to our app</span>
                    <div className="card-text">
                    <form>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className='form-control inputMargin' 
                                name="firstname"
                                placeholder="FirtsName"
                                value={userData.firstname}
                                onChange={(event)=> onChangeInput(event)}
                                required="required"/>
                                {commonError.firtsname !== '' ? <p className="errorMessage">{commonError.firstname}</p> : null }
                            <input 
                                type="text"
                                className='form-control inputMargin'
                                placeholder="LastName"
                                name="lastname"
                                value={userData.lastname}
                                onChange={(event)=> onChangeInput(event)}/>
                                {commonError.lastname !== '' ? <p className="errorMessage">{commonError.lastname}</p> : null }
                            <input 
                                type="email" 
                                className='form-control inputMargin'
                                placeholder="Email"
                                name="email"
                                value={userData.email}
                                onChange={(event)=> onChangeInput(event)}/>
                                 {commonError.email !== '' ? <p className="errorMessage">{commonError.email}</p> : null }
                            {/* <div className='row float-left' style={{display: 'flex'}}> */}
                            <div className='row'>
                                <div className="col-md-3">
                                        <select 
                                            name="code" 
                                            className='form-control' 
                                            id="wqe"
                                            value={userData.code}
                                            onChange={(event)=>onChangeInput(event)}>
                                            <option  value="91"> +91 </option>
                                            <option  value="44">+44</option>
                                            <option  value="213">+213</option>
                                            <option  value="376">+376</option>`
                                        </select>
                                </div>
                                <div className="col-md-9">
                                    <input 
                                        type="text" 
                                        name="phoneNumber"
                                        value={userData.phoneNumber}
                                        onChange={(event)=>onChangeInput(event)}
                                        className='form-control' 
                                        placeholder="Phone Number"/>
                                    {commonError.phoneNumber !== '' ? <p className="errorMessage">{commonError.phoneNumber}</p> : null }
                                </div>
                            </div>
                                 <select 
                                    name="course"  
                                    className='form-control' 
                                    id="wqe"
                                    value={userData.course}
                                    placeholder='Select Course'
                                    onChange={(event)=>onChangeInput(event)}>
                                    <option  value="Select course"> Select Course </option>
                                    <option  value="BioChemistry"> BioChemistry </option>
                                    <option  value="Physics">Physics</option>
                                    <option  value="Chemistry">Chemistry</option>
                                    <option  value="Science">Science</option>`
                                 </select>
                            {commonError.course === 'Select course' ? <p className="errorMessage">{commonError.course}</p> : null }
                        </div>
                        <button 
                            type="submit" 
                            className="form-control btn btn-success submitBtn inputMargin"
                            disabled={
                                userData.firstname === '' || 
                                userData.lastname === '' ||
                                userData.email === '' ||
                                userData.code === '' ||
                                userData.phoneNumber === '' ||
                                userData.course === '' 
                            }
                            onClick={(event) => onSubmitData(event)}
                            >Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RightSide;