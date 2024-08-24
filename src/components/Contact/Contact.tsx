import { useState } from 'react';
import ContactItem from './ContactItem';
import Call from './Call';
import Address from './Address';
import Message from './Message';

const Contact = () => {
    const [option, setOption] = useState<string >("");
    const selectOptin = (option: string) => {
        setOption(option);
    }

    const closeOptin = () => {
        setOption("")
    }

  return (
    <section className="bg-primary p-4 md:p-8 lg:p-12">
        <div className="relative w-full max-w-6xl mx-auto">
            <h2 className="text-secondary font-[600] text-[30px] md:text-[36px] lg:text-[45px] leading-[40px] md:leading-[50px] lg:leading-[60px] mb-6 md:mb-9">Contact Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 text-[20px] sm:text-[24px] lg:text-[30px] font-[500] mb-8">
                <ContactItem onClick={()=> selectOptin("call")} icon="bx bxs-phone" children="call" />
                <ContactItem onClick={()=> selectOptin("address")} icon="bi bi-geo-alt-fill" children="Address" />
                <ContactItem onClick={()=> selectOptin("message")} icon="bx bxs-message" children="Message" />
            </div>

            {option && (
                <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-md bg-mainColor text-center rounded-lg p-4 lg:p-6 ">
                    <button className="absolute right-4 top-2 bg-white text-red-500 text-[22px] lg:text-[24px] px-2 rounded flex justify-center items-center" onClick={closeOptin}>&times;</button>
                    {option === "call" && (
                        <Call />
                    )}
                    {option === "address" && (
                        <Address />
                    )}
                    {option === "message" && (
                        <Message />
                    )} 
                </div>
            )}
        </div>
    </section>
  )
}

export default Contact;
