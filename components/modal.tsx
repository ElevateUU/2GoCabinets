import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

import Image from "next/image";

import Contact from "@/components/new_contact";

import ArrowDown from "@/public/assets/arrowdown.svg"
import Close from "@/public/assets/close.svg";
import Estimate from "@/public/modal/GetanEstimate_d@2x.png";
import Call from "@/public/modal/SpeakwithExpert_d@2x.png";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

ReactModal.setAppElement("#__next");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(5px)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f7f6f5",
    borderRadius: "30px",
    width: "980px",
    height: "630px",
    padding: 0,
  },
};

const Modal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleGetEstimateClick = () => {
    setShowContactForm(true);
  };

  const handleBackClick = () => {
    setShowContactForm(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <div className="h-[72px] px-10 flex items-center justify-between border-b border-modalborder bg-lightgray">
        <p>Welcome!</p>
        <button onClick={closeModal}>
          <Image src={Close} alt={""}></Image>
        </button>
      </div>

      <div>
        <div className="pt-2 pb-14 px-16 flex flex-col gap-14">
          <h2 className="text-4xl">How would you like to get started?</h2>
          <div className="flex gap-6">
            <div className="bg-white flex flex-col gap-4 p-5 rounded-2xl border border-modalborder w-[414px] h-[380px]">
              <div className="bg-modalimg1 rounded-lg">
                <Image src={Estimate} alt={""} height={166} />
              </div>
              <div>
                <h3 className="mb-2 text-xl">Get a starting estimate</h3>
                <p className="text-sm text-modaltext">
                  In less than 2 minutes, get started on the design process and
                  estimate for your project.
                </p>
              </div>
              <button className="bg-color4 rounded-lg text-white w-full h-[60px]">
                Get Your Estimate
              </button>
            </div>
            <div className="bg-white p-5 flex flex-col gap-4 rounded-2xl border border-modalborder w-[414px] h-[380px]">
              <div className="bg-modalimg2 rounded-lg">
                <Image src={Call} alt={""} height={166} />
              </div>
              <div>
                <h3 className="mb-2 text-xl">Get a starting estimate</h3>
                <p className="text-sm text-modaltext">
                  In less than 2 minutes, get started on the design process and
                  estimate for your project.
                </p>
              </div>
              {showContactForm ? (
                <div className="absolute top-0 left-0 w-full h-full bg-white">
                  <div className="h-[72px] px-10 flex items-center justify-between border-b border-modalborder bg-lightgray">
                    <button className="rotate-180" onClick={handleBackClick}>
                      <Image src={ArrowDown} alt={""}></Image>
                    </button>
                    <button onClick={closeModal}>
                      <Image src={Close} alt={""}></Image>
                    </button>
                  </div>
                  <Contact />
                </div>
              ) : (
                <div>
                  <button
                    className="bg-color4 rounded-lg text-white w-full h-[60px]"
                    onClick={handleGetEstimateClick}
                  >
                    Get Your Estimate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
