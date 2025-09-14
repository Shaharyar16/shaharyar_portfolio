import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q4uy2iu",
        "template_0owi1xm",
        form.current,
        "UW8fqvnkNLuo-e2ws"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send!" + error.text);
        }
      );
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 text-gray-500">
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Send a Message
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-1 w-full px-4 py-2 border-2 text-[14px] border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-900 focus:border-blue-900 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-900 focus:border-blue-900 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Tell me about your project..."
            className="mt-1 w-full px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-blue-900 focus:border-blue-900 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500 text-white py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:via-blue-600 hover:to-green-600 hover:scale-102 transition"
        >
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Message;
