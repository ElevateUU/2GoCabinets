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

  const handleInterestClick = (
    e: React.MouseEvent<HTMLInputElement>,
    value: string
  ) => {
    e.stopPropagation();
    setInterests((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((interest) => interest !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  const dropdownContent = (
    <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-full rounded-md p-3 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 custom-dropdown-content">
      <div className="py-1">
        {interestOptions.map((option) => (
          <div
            key={option.value}
            className="px-4 text-sm cursor-pointer flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor={option.value}>{option.label}</label>
            <input
              type="checkbox"
              id={option.value}
              name={option.value}
              checked={interests.includes(option.value)}
              onClick={(e) => handleInterestClick(e, option.value)}
              className="ml-4 scale-150 sm:scale-100 transform-gpu sm:ml-4"
            />
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
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="px-4 rounded mx-auto max-w-3xl w-full mt-16 sm:mt-32 pb-24 inputs space-y-5"
      >
        <div>
          <h1 className="text-4xl pb-8 sm:pb-16 font-medium text-center">
            GET IN TOUCH
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <label className="font-normal" htmlFor="firstName">
              First Name
            </label>
            <input
              className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all w-full"
              type="text"
              name="First name"
              id="firstName"
              required
              ref={firstNameRef}
            />
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label className="font-normal" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all w-full"
              type="text"
              name="Last name"
              id="lastName"
              required
              ref={lastNameRef}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-0">
          <div className="w-full sm:w-1/2">
            <label className="font-normal" htmlFor="phone">
              Phone
            </label>
            <input
              className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all w-full"
              type="phone"
              name="Phone"
              id="phone"
              required
              ref={phoneRef}
            />
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label className="font-normal" htmlFor="email">
              Email
            </label>
            <input
              className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all w-full"
              type="email"
              name="Email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
        </div>
        <div>
          <label className="font-normal" htmlFor="message">
            Message
          </label>
          <input
            className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all w-full"
            type="text"
            name="Message"
            id="message"
            required
            ref={messageRef}
          />
        </div>
        <ReactSelect
          id="react-select"
          options={selectOptions}
          className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 transition-all w-full"
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

        <div className="w-full relative">
          <label className="font-normal" htmlFor="interests">
            What Services are you looking for? (check all that apply)
          </label>
          <div
            className="border outline-0 border-black border-t-0 border-l-0 border-r-0 border-b-2 focus:border-sembro transition-all  w-full cursor-pointer"
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
            className="pb-10 mr-auto ml-auto  hover:text-sembro duration-300"
          >
            <p className="font-medium text-xl">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
