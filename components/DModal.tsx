import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

import Image from "next/image";

import Close from "@/public/assets/close.svg";
import Island from "@/public/DModal/kitchen-island.jpeg"
import Link from "next/link";


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

const DModal: React.FC<Props> = ({ isOpen, closeModal }) => {
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
  <button onClick={closeModal} style={{marginLeft: 'auto'}}>
    <Image src={Close} alt={""} />
  </button>
</div>


      <div className="flex justify-center items-center" style={{height: 'calc(100% - 72px)'}}> {/* Adjust the height calculation as necessary */}
    <div className="flex justify-center items-center flex-col gap-14 p-2" style={{flexGrow: 1}}>
      <div className="flex gap-6 justify-center">
      <div className="bg-white flex flex-col gap-4 p-5 rounded-2xl border border-modalborder w-[414px] h-[380px]">
              <div className="bg-modalimg1 rounded-lg">
                <Image src={Island} alt={""} height={300} />
              </div>
              <Link href="/island">
                <button className="bg-color4 rounded-lg text-white w-full h-[60px]">
                  Get Your Estimate
                </button>
              </Link>
            </div>
        <div className="bg-white p-5 flex flex-col gap-4 rounded-2xl border border-modalborder w-[414px] h-[380px]">
        </div>
      </div>
    </div>
  </div>

    </ReactModal>
  );
};

export default DModal;
