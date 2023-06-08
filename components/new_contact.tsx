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

  const handleInterestClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    setInterests((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((interest) => interest !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  const dropdownContent = (
    <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-full rounded-md p-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 custom-dropdown-content">
      <div className="py-1 rounded-md p-2 w-full focus:border-blue-500 transition-colors">
        {interestOptions.map((option) => (
          <div
            key={option.value}
            className="px-4 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors"
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
                onChange={handleInterestClick}
                className="focus:outline-none w-5 h-5 text-sembro"
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
    <div className="p-4 pt-24 sm:p-0">
      <form
        onSubmit={handleSubmit}
        className="rounded max-w-3xl w-full mt-8 sm:mt-16 pb-12 space-y-6 sm:space-y-8 mx-auto"
      >
        <h1 className="text-2xl sm:text-4xl font-medium text-center mb-6 sm:mb-8">
          GET IN TOUCH
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full">
            <label className="font-normal block mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              className="border-2 border-gray-200 rounded-md p-2 w-full focus:border-blue-500 transition-colors"
              type="text"
              name="First name"
              id="firstName"
              required
              ref={firstNameRef}
            />
          </div>
          <div className="w-full">
            <label className="font-normal block mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="border-2 border-gray-200 rounded-md p-2 w-full focus:border-blue-500 transition-colors"
              type="text"
              name="Last name"
              id="lastName"
              required
              ref={lastNameRef}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full">
            <label className="font-normal block mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              className="border-2 border-gray-200 rounded-md p-2 w-full focus:border-blue-500 transition-colors"
              type="phone"
              name="Phone"
              id="phone"
              required
              ref={phoneRef}
            />
          </div>
          <div className="w-full">
            <label className="font-normal block mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-gray-200 rounded-md p-2 w-full focus:border-blue-500 transition-colors"
              type="email"
              name="Email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="font-normal block mb-1" htmlFor="message">
            Message
          </label>
          <input
            className="border-2 border-gray-200 rounded-md p-2 w-full focus:border-blue-500 transition-colors"
            type="text"
            name="Message"
            id="message"
            ref={messageRef}
          />
        </div>
        <div className="w-full">
          <ReactSelect
            id="react-select"
            options={selectOptions}
            className="border-2 border-gray-200 rounded-md p-2 transition-colors w-full focus:border-blue-500"
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
                color: "black",
                padding: 0,
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "black",
                marginLeft: 0,
                padding: 0,
              }),
              option: (provided) => ({
                ...provided,
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
              }),
            }}
            onChange={(option) => setSelectedOption(option ? option.value : "")}
          />
        </div>
        <div className="w-full relative">
          <label className="font-normal block mb-1" htmlFor="interests">
            What Services are you looking for?
          </label>
          <div
            className="border-2 border-gray-200 rounded-md p-2 cursor-pointer w-full focus:border-blue-500 transition-colors"
            onClick={toggleDropdown}
          >
            <span>
              {interests.length > 0 ? interests.join(", ") : "Select service"}
            </span>
          </div>
          {dropdownOpen && dropdownContent}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 rounded text-black font-medium text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
