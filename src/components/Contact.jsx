import React from "react";
import ContactDetails from "./ContactDetails";
import Message from "./Message";

const Contact = () => {
  return (
    <>
      <div className=" w-full bg-gradient-to-r from-white via-blue-600 to-white h-[0.5px] block m-0 p-0"></div>
      <div>
        <div className="py-[4rem] px-[6rem] max-md:px-[1rem]">
          <div>
            <div className="text-center">
              <div className="text-4xl max-md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mx-auto text-center">
                Let's Work Together
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-[4px] w-30 rounded-2xl mx-auto mt-2"></div>
              <div className="text-[14px] text-gray-500 mt-7 text-center max-md:text-sm">
                Have a project in mind? I'd love to hear about it. Let's discuss
                how we can bring your ideas to <br className="max-md:hidden"/>
                life.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10 items-center max-md:flex max-md:flex-col-reverse">
            <ContactDetails />
            <Message/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
