import React , { useState } from 'react'


const Form = () => {
    const  [info, setInfo] = useState([
        {
            name:'',
            email:'',
            mobileNumber:'',
            subject:'',
            formErrors: {name:'',email: '', mobileNumber: ''},
            nameValid:false,
            emailValid: false,
            mobileNumberValid: false,
            formValid: false
        }
    ]);
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo( info.map(index => {
                index[name] = value;
                return index
            }, () => { this.validateField(name, value) })
        );
        // console.log(info)
    };
    const handlerSubmitForm = (e) =>{
        e.preventDefault();
    };
    // const validateField = (fieldName, value) =>{
    //     let fieldValidationErrors = info.formErrors;
    //     let nameValid = info.nameValid;
    //     let emailValid = info.emailValid;
    //     let mobileNumberValid = info.mobileNumberValid;
    //     switch(fieldName) {
    //         case 'email':
    //             emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //             fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //             break;
    //         case 'name':
    //             nameValid = value.length >= 2;
    //             fieldValidationErrors.name = nameValid ? '': ' is too short';
    //             break;
    //         case 'mobileNumber':
    //             mobileNumberValid = value.length >= 2;
    //             fieldValidationErrors.mobileNumber = nameValid ? '': ' is too short';
    //             break;
    //         default:
    //             break;
    //     }
    //     setInfo({formErrors: fieldValidationErrors,
    //         emailValid: emailValid,
    //         nameValid: nameValid,
    //         mobileNumberValid: mobileNumberValid
    //     },validateForm);
    // };
    // const validateForm = () =>{
    //     setInfo({formValid: info.emailValid &&
    //     info.nameValid});
    // };
    return(
        <>
        <form onSubmit={handlerSubmitForm}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">NAME</label>
                <input type="text" className="form-control rounded-0" id="exampleFormControlInput1" name="name"  value={info.name} onChange={handleUserInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">E-MAIL</label>
                <input type="email" className="form-control rounded-0" id="exampleFormControlInput1" name="email"  value={info.email} onChange={handleUserInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">MOBILE.NO</label>
                <input type="number" className="form-control rounded-0" id="exampleFormControlInput1" name="mobileNumber"  value={info.mobileNumber} onChange={handleUserInput}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">SUBJECT</label>
                <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3" name="subject" value={info.subject} onChange={handleUserInput}/>
            </div>

            <button className="btn btn-primary rounded-0" >Submit</button>
        </form>
        </>
    )
}

export default Form