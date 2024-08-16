import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import "./Componentscss/popupcss.css";
import rocket from "../assets/rocket.svg";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PopupGfg() {
  const [data, setData] = useState({
    email: "",
  });
  const [mess, setMess] = useState({
    message: "",
  });

  // Handling change on input
  const handleChange = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setMess({
      ...mess,
      message: e.target.value,
    });
  };

  // Notify user of success or error
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
    });
  };

  // Emailjs code to send mail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (data.email.trim() === "" || mess.message.trim() === "") {
      notify('error', 'Please fill in all required fields');
      return;
    }

    emailjs.sendForm('service_1gwmc5e', 'template_dfkci6r', form.current, {
      publicKey: 'SGn2f-g9vtZbSY3ay',
    })
      .then(
        () => {
          notify('success', 'Message Sent Successfully!');
          e.target.reset();
          setData({ email: "" });
          setMess({ message: "" });
        },
        (error) => {
          notify('error', `Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div>
      {/* Popup form code */}
      <Popup className='my-popup'
        trigger={<button><h4 className='text-[#DCFF7E] text-lg md:text-xl'>Contact@TusharVaghela</h4></button>}
        modal nested>
        {
          close => (
            <div className='modal bg-[#0A0A0A] rounded w-[90%] md:w-[60em] max-w-lg mx-auto'>
              <div className='close w-full h-[3em] flex justify-end p-4'>
                <i className="cursor-pointer ri-close-line text-[1.5rem] text-white" onClick={() => close()}></i>
              </div>
              <div className='content p-4 md:p-8'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
                  <div>
                    <h1 className='text-lg md:text-[1.5rem] text-white'>Email<sup className='pl-[2px]'>*</sup></h1>
                    <input type="email" className='rounded pl-3 text-black w-full h-[50px]' name="from_email" value={data.email} id="email" required placeholder='Your Email Address' onChange={handleChange} />
                  </div>

                  <div>
                    <h1 className='text-lg md:text-[1.5rem] text-white'>Message<sup className='pl-[2px]'>*</sup></h1>
                    <textarea className='message rounded w-full pl-3 pt-3 h-[8em]' name="message" value={mess.message} onChange={handleChange2} required placeholder='Your Message'></textarea>
                  </div>

                  <div className='flex justify-center'>
                    <button type='submit' className='text-black text-lg md:text-[1.5rem] flex rounded py-2 px-4 bg-[#DCFF7E] w-full md:w-auto items-center justify-center gap-2'>
                      Submit Form <img className='rocketimg w-[20px] h-[20px]' src={rocket} alt="rocket" />
                    </button>
                  </div>

                  <ToastContainer />
                </form>
              </div>
            </div>
          )
        }
      </Popup>
    </div>
  );
}
