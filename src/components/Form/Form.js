import React, {useState} from 'react'

const Form = () => {

    const fields = {
        name: '',
        email: '',
        mobileNumber: ''
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
                error: 'is invalid',
            },
            name: {
                validate: value => value.length >= 2,
                error: 'is too short',
            },
            mobileNumber: {
                validate: value => value.length >= 2,
                error: 'is too short',
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
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">NAME</label>

                    <p className={'text-danger'}>{info.formErrors.name}</p>

                    <input type="text" className="form-control rounded-0" id="exampleFormControlInput1" name="name"
                           value={info.name} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">E-MAIL</label>

                    <p className={'text-danger'}>{info.formErrors.email}</p>

                    <input type="email" className="form-control rounded-0" id="exampleFormControlInput1" name="email"
                           value={info.email} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">MOBILE.NO</label>

                    <p className={'text-danger'}>{info.formErrors.mobileNumber}</p>

                    <input type="number" className="form-control rounded-0" id="exampleFormControlInput1"
                           name="mobileNumber" value={info.mobileNumber} onChange={handleUserInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">SUBJECT</label>
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3"
                              name="subject" value={info.subject} onChange={handleUserInput}/>
                </div>

                <button type="button" className="btn btn-primary rounded-0">Submit</button>
            </form>
        </>
    )
}

export default Form
