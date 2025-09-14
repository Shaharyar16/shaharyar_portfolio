import React from "react";
import SmallCard from "./SmallCard";

const ContactDetails = () => {
  return (
    <div className="text-black">
      <div>
        <div>
          <h1 className="font-bold text-2xl">Get in Touch</h1>
          <p className="text-gray-500 text-[15px] mt-3">
            I'm always open to discussing new opportunities, creative projects,
            or potential collaborations. Whether you're a company looking to
            hire, or you're a fellow developer wanting to connect, I'd love to
            hear from you.
          </p>
        </div>
        <div className="pl-4 pt-4">
          <SmallCard
            classname="text-3xl fa-solid fa-envelope"
            heading="Email"
            text="shaharyarzia16@gmail.com"
          />
          <SmallCard
            classname="text-3xl fa-solid fa-phone"
            heading="Phone"
            text="+92 303 5532435"
          />
          <SmallCard
            classname="text-4xl fa-solid fa-location-dot"
            heading="Adress"
            text="RawalPindi, Pakistan"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[16px]">Follow Me</h1>
          <div className="flex gap-5 mt-3">
            <div className="hover:scale-125 transform transition-transform duration-200 shadow-xl">
              <a
                href="https://www.linkedin.com/in/shaharyar-zia-b93b97327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 382 382"
                  width="28"
                  height="28"
                >
                  <rect width="382" height="382" fill="#0077B7" rx="15%" />
                  <path
                    fill="#fff"
                    d="M118.2 329.8c0 5.6-4.5 10.1-10.1 10.1H65.3c-5.6 0-10.1-4.5-10.1-10.1V150.4c0-5.6 4.5-10.1 10.1-10.1h42.8
         c5.6 0 10.1 4.5 10.1 10.1v179.4zM86.7 123.4c-22.5 0-40.7-18.2-40.7-40.7S64.3 42.1 86.7 42.1c22.5 0 40.7 18.2 40.7 40.7
         s-18.2 40.7-40.7 40.7zm255.2 207.3c0 5.1-4.1 9.2-9.2 9.2H286.7c-5.1 0-9.2-4.1-9.2-9.2v-84.2c0-12.6 3.7-55-32.8-55
         -28.3 0-34.1 29.1-35.2 42.1v97.1c0 5.1-4.1 9.2-9.2 9.2h-44.4c-5.1 0-9.2-4.1-9.2-9.2V149.6c0-5.1 4.1-9.2 9.2-9.2h44.4
         c5.1 0 9.2 4.1 9.2 9.2v15.7c10.5-15.8 26.1-27.9 59.3-27.9 73.6 0 73.1 68.7 73.1 106.5v87.3z"
                  />
                </svg>
              </a>
            </div>
            <div className="hover:scale-125 transform transition-transform duration-200 shadow-xl">
              <a
                href="https://github.com/Shaharyar16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
      6.53 5.47 7.59.4.07.55-.17.55-.38 
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      0-.53.63-.01 1.08.58 1.23.82.72 1.21 
      1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 
      0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.69c.68.01 1.36.09 
      2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
      1.91.08 2.11.51.56.82 1.27.82 2.15 
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
      8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
            <div className="hover:scale-125 transform transition-transform duration-200 shadow-xl">
              <a
                href="https://www.instagram.com/__sharyyyy__?igsh=MWt2Z3o3eGVnNHgwNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id="IG-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#feda75" />
                      <stop offset="25%" stopColor="#fa7e1e" />
                      <stop offset="50%" stopColor="#d62976" />
                      <stop offset="75%" stopColor="#962fbf" />
                      <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#IG-gradient)"
                    d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 11-5.5 5.5 5.5 5.5 0 015.5-5.5zm0 1.5a4 4 0 104 4 4 4 0 00-4-4zm6.75-.88a1.13 1.13 0 11-1.13-1.12 1.13 1.13 0 011.13 1.12z"
                  />
                </svg>
              </a>
            </div>
            <div className="hover:scale-115 transform transition-transform duration-200 shadow-xl">
              <a
                href="mailto:shaharyarzia16@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
