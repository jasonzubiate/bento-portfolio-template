"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function ConnectCard() {
  const [modal, setModal] = useState(false);

  return (
    <section
      id="connect"
      className="p-6 flex flex-col gap-4 bg-blush-gray rounded-xl"
    >
      <div className="font-semibold inline">
        <h2 className="text-demo-smoke text-lg inline">
          Let&apos;s work together –{" "}
        </h2>

        <p className="text-p-text font-normal inline">
          To get started, please fill out the form below so I can better
          understand your project scope.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-8 text-demo-smoke">
          <div className="flex flex-col">
            <p>– React & Next.js</p>
            <p>– Web Design</p>
          </div>
          <div className="flex flex-col">
            <p>– UX Design</p>
            <p>– CMS Development</p>
          </div>
          <div className="flex flex-col">
            <p>– Motion Design</p>
            <p>– Animations</p>
          </div>
        </div>
        <button
          className="bg-demo-smoke text-[#060606] font-semibold px-3 py-2 rounded-md"
          onClick={() => setModal(true)}
        >
          Connect
        </button>
      </div>
      {modal ? <ContactModal toggleModal={setModal} /> : ""}
    </section>
  );
}
