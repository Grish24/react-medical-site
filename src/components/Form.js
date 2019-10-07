import React, {useState} from 'react'

const Form = () => {

    const fields = {
        name: '',
        email: '',
        mobileNumber: '',
        subject: ''
    };

    const [info, setInfo] = useState({
        ...fields,
        formErrors: {
            ...fields
        },
    });

    const handleUserInput = (e) => {
        const {name, value} = e.target;

        const fields = validateField(name, value);
        setInfo(fields);
    };

    const validateField = (fieldName, value) => {
        const validations = {
            email: {
                validate: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
                error: 'Email is invalid',
            },
            name: {
                validate: value => value.length >= 2,
                error: 'Name is too short',
            },
            mobileNumber: {
                validate: value => value.length >= 2,
                error: 'Mobile Number is too short',
            },
            subject: {
                validate: value => value.length >= 2,
                error: 'Text is too short',
            }
        };

        const data = {
            ...info,
            [fieldName]: value,
            formErrors: {
                ...info.formErrors,
                [fieldName]: ''
            }
        };

        const isValid = validations[fieldName].validate(value);
        if(!isValid) {
            data.formErrors[fieldName] = validations[fieldName].error;
        }

        return data;
    };

    return (
        <>
            <form className="form-style">
                <div className="form-group">
                    <label htmlFor="FormName">NAME</label>
                    <input type="text" className="form-control rounded-0" id="FormName" name="name"
                           value={info.name} onChange={handleUserInput}/>
                    <p className='text-danger mt-1 mb-1'><small>{info.formErrors.name}</small></p>
                </div>
                <div className="form-group">
                    <label htmlFor="FormEmail">E-MAIL</label>
                    <input type="email" className="form-control rounded-0" id="FormEmail" name="email"
                           value={info.email} onChange={handleUserInput}/>
                    <p className='text-danger mt-1 mb-1'><small>{info.formErrors.email}</small></p>
                </div>
                <div className="form-group">
                    <label htmlFor="FormMobileNumber">MOBILE.NO</label>
                    <input type="number" className="form-control rounded-0" id="FormMobileNumber"
                           name="mobileNumber" value={info.mobileNumber} onChange={handleUserInput}/>
                    <p className='text-danger mt-1 mb-1'><small>{info.formErrors.mobileNumber}</small></p>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">SUBJECT</label>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3"
                              name="subject" value={info.subject} onChange={handleUserInput}/>
                    <p className='text-danger mt-1 mb-1'><small>{info.formErrors.subject}</small></p>

                </div>

                <button type="button" className="btn btn-primary rounded-0 mt-1">Submit</button>
            </form>
        </>
    )
}

export default Form
