import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[50vh] flex items-center justify-center max-md:pt-10"
    >
      <div className="w-[60%] flex flex-col gap-5 items-center">
        <h2 className="leading-normal text-blue-600 font-bold text-2xl">
          Contact
        </h2>
        <p className="leading-normal text-lg font-semibold break-words">
          Don't be shy! Hit me up! 👇🏻
        </p>
        <div className="flex justify-between mt-10 w-full max-md:flex-col max-md:gap-10">
          <div className="flex gap-3 max-md:flex-col max-md:items-center">
            <Image src={"/assets/icons/location.gif"} width={30} height={10} />
            <div>
              <h3 className="font-semibold max-md:text-center">Location</h3>
              <p className="text-slate-gray">Bengaluru, India</p>
            </div>
          </div>
          <div className="flex gap-3 max-md:flex-col max-md:items-center">
            <Image src={"/assets/icons/mail.gif"} width={30} height={10} />
            <div>
              <h3 className="font-semibold max-md:text-center">Mail</h3>
              <p className="text-slate-gray">sharma.ankit2698@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 max-md:flex-col max-md:items-center">
            <Image src={"/assets/icons/call.gif"} width={30} height={10} />
            <div>
              <h3 className="font-semibold max-md:text-center">Call</h3>
              <p className="text-slate-gray">+91 9589991316</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
