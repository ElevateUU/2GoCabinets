import React, { useRef, useState } from "react";
import ReactSelect from "react-select";

const LeadForm = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const dropDownRef = useRef<HTMLSelectElement>(null);

  const [selectedOption, setSelectedOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const interestOptions = [
    { label: "Kitchen Remodel", value: "Kitchen Remodel" },
    { label: "Bathroom Remodel", value: "Bathroom Remodel" },
    { label: "Cabinets", value: "Cabinets" },
    { label: "Countertops ", value: "Countertops" },
    { label: "Flooring ", value: "Flooring" },
    { label: "Basement ", value: "Basement" },
  ];

  const selectOptions = [
    { value: "Online Search", label: "Online Search" },
    { value: "Instagram", label: "Instagram" },
    { value: "Facebook", label: "Facebook" },
    { value: "ValPack Flyer", label: "ValPack Flyer" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleInterestClick = (value: string) => {
    if (interests.includes(value)) {
      setInterests(interests.filter((interest) => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const [showContactForm, setShowContactForm] = useState(false);

  const handleGetEstimateClick = () => {
    setShowContactForm(true);
  };

  const handleBackClick = () => {
    setShowContactForm(false);
  };

  const dropdownContent = (
    <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-full p-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 custom-dropdown-content">
      <div className="py-1 p-2 w-full transition-colors">
        {interestOptions.map((option) => (
          <div
            key={option.value}
            className="px-4 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors"
            onClick={() => handleInterestClick(option.value)}
          >
            <label className="text-gray-700" htmlFor={option.value}>
              {option.label}
            </label>
            <div className="border-0 rounded w-5 h-5 flex justify-center items-center">
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                checked={interests.includes(option.value)}
                className="focus:outline-none w-5 h-5 text-sembro"
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      phone: phoneRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      selectedOption: selectedOption,
      interests,
    };

    await fetch("api/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("tatysho");
    });
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-10">
        <div className="flex flex-col gap-4 w-[332px]">
          <p className="text-4xl">Where would you like to receive updates?</p>
          <p className=" text-xl text-modaltext">
            Let us know where we can send your comprehensive estimate after an
            expert on our team has checked and refined it.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded max-w-3xl w-1/2 mt-8 sm:mt-16 pb-12 space-y-6 sm:space-y-8 justify-center"
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full">
              <input
                className="custom-input border border-graydot rounded-lg border-gray-200 p-2 w-full focus:border-color5 transition-colors"
                type="text"
                name="First name"
                id="firstName"
                placeholder="First Name"
                required
                ref={firstNameRef}
              />
            </div>
            <div className="w-full">
              <input
                className="border border-graydot rounded-lg border-gray-200 p-2 w-full focus:border-color5 transition-colors"
                type="text"
                name="Last name"
                id="lastName"
                placeholder="Last Name"
                required
                ref={lastNameRef}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full">
              <input
                className="border border-graydot rounded-lg border-gray-200 p-2 w-full focus:border-color5 transition-colors"
                type="phone"
                name="Phone"
                id="phone"
                placeholder="Phone"
                required
                ref={phoneRef}
              />
            </div>
            <div className="w-full">
              <input
                className="border border-graydot rounded-lg border-gray-200  p-2 w-full focus:border-color5 transition-colors"
                type="email"
                name="Email"
                id="email"
                placeholder="Email"
                required
                ref={emailRef}
              />
            </div>
          </div>
          <div className="w-full">
            <input
              className="border text-gray border-graydot rounded-lg border-gray-200  p-2 w-full focus:border-color5 transition-colors"
              type="text"
              name="Message"
              id="message"
              placeholder="Message"
              ref={messageRef}
            />
          </div>
          <div className="w-full">
            <ReactSelect
              id="react-select"
              options={selectOptions}
              className="border border-graydot rounded-lg p-2 transition-colors w-full focus:border-color5"
              placeholder="Where did you hear about us?"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  boxShadow: "none",
                  borderColor: "transparent",
                  cursor: "default",
                  border: 0,
                  padding: 0,
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "text-gray",
                  padding: 0,
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: "text-gray",
                  marginLeft: 0,
                  padding: 0,
                }),
                option: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  color: "text-gray",
                  cursor: "pointer",
                }),
              }}
              onChange={(option) =>
                setSelectedOption(option ? option.value : "")
              }
            />
          </div>
          <div className="w-full relative">
            <div
              className="border border-graydot rounded-lg p-2 cursor-pointer w-full focus:border-color5 transition-colors"
              onClick={toggleDropdown}
            >
              <span>
                {interests.length > 0
                  ? interests.join(", ")
                  : "What Services are you looking for?"}
              </span>
            </div>
            {dropdownOpen && dropdownContent}
          </div>
          <div className="flex justify-center">
            <button
                className="bg-color5 w-40 h-14 rounded-lg text-sm text-white"
                type="submit"
              >
                Get Your Estimate
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
