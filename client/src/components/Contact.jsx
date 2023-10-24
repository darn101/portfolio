import { useState } from "react";
import axios from "axios";
import Modal from '@mui/material/Modal';

const Contact = () => {

    const Details = {
        name: '',
        email: '',
        message: ''
    }

    const [DetailsData, setDetailsData] = useState(Details);
    const [ShowSuccessBox, SetShowSuccessBox] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetailsData({ ...DetailsData, [name]: value });
    }

    const [Err, SetErr] = useState(null);

    const CloseModal = () => {
        SetErr(null);
        setDetailsData({ ...Details }, { name: '', email: '', message: '' });
        SetShowSuccessBox(false);
    }

    const CheckErrors = () => {
        const errors = {};
        if (!DetailsData.name) {
            errors.name = 'You forgot to enter your Name';
        }
        if (!DetailsData.email) {
            errors.email = 'You forgot to enter your E-mail';
        }
        if (!DetailsData.message) {
            errors.message = 'You forgot to enter the message';
        }
        return errors;
    }


    const SubmitForm = (e) => {
        e.preventDefault();
        const errors = CheckErrors();

        if (Object.keys(errors).length === 0) {
            console.log('hi');
            axios
                .post("https://getform.io/f/06a143da-3ab8-4d07-bff3-a03c2d004b20", {
                    name: DetailsData.name,
                    email: DetailsData.email,
                    message: DetailsData.message,
                },
                    { headers: { 'Accept': 'application/json' } })
                .then(response => console.log(response))
                .then(SetShowSuccessBox(true))
                .catch(error => console.log(error))
        }
        else {
            SetErr(errors);
        }
    }

    return (
        <>
            <div className="relative ml-[5%] md:ml-[20%] h-screen" id="Contact">
                <p className='text-white underline text-4xl font-medium decoration-solid underline-offset-[0.8rem]'>Contact</p>
                <p className='mt-[5rem] text-white pr-[10%] text-lg'>Fill the form below to contact me</p>

                <div className="text-white flex flex-col justify-center">
                    {/* action="https://getform.io/f/06a143da-3ab8-4d07-bff3-a03c2d004b20" method="POST" */}
                    <form method="POST" id="form__submit" onSubmit={(e) => SubmitForm(e)}>
                        <div className="py-4 ">
                            {Err && <p className="text-red-500">{Err.name}</p>}
                            <input type="name" placeholder='Enter your name' name="name" onChange={(e) => handleChange(e)} className="w-[20rem] rounded-md border-solid border-white border-2 bg-transparent px-2 py-1 focus-outline-none" value={DetailsData.name} />
                        </div>

                        <div className="py-4 ">
                            {Err && <p className="text-red-500">{Err.email}</p>}
                            <input type="email" placeholder='Enter your e-mail' name="email" onChange={(e) => handleChange(e)} className="w-[20rem] rounded-md border-solid border-white border-2 bg-transparent px-2 py-1" value={DetailsData.email} />
                        </div>


                        <input type="hidden" name="_gotcha" style={{ display: `none !important` }}></input>

                        <div className="text-start py-4">
                            {Err && <p className="text-red-500">{Err.message}</p>}
                            <textarea type="text" placeholder='Message' name="message" onChange={(e) => handleChange(e)} className="h-[10rem] md:h-[15rem] w-[25rem] lg:w-[40rem] rounded-md border-solid border-white border-2 bg-transparent px-2 py-1" value={DetailsData.message} />
                        </div>

                        <div className="text-black py-4">
                            <button href="#" type="submit" className="hover:scale-105 flex mt-5 text-white px-4 py-2 mt-4 text-xl bg-blue-700 rounded-md w-fit">Let's Talk</button>
                        </div>
                    </form>
                </div>

                <Modal
                    open={ShowSuccessBox}
                    onClose={() => CloseModal()}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <div className=" top-[40%] left-[17%] md:left-[34%] lg:left-[44%] absolute text-white w-[20rem] flex flex-col items-center border-solid border-white border-2 bg-black px-8  pt-3 pb-8 rounded">
                        <p className="text-2xl font-semibold">Thanks!</p>
                        <p className="mt-4">Your message has been sent. I will get back to you soon.</p>
                        <button onClick={() => CloseModal()} className="mt-6 w-full  flex justify-center hover:scale-105 flex text-white px-4 py-0.5 mt-4 text-xl bg-green-600 hover:bg-green-550 rounded-md"><span className="text-[1.5rem]">OK</span></button>
                    </div>
                </Modal>

                {/* <img src="https://image.similarpng.com/very-thumbnail/2021/06/Green-check-mark-icon-on-transparent-background-PNG.png" alt="success" className="h-[2rem] w-[2rem] bg-transparent"></img> */}


            </div>
        </>
    );
}

export default Contact;