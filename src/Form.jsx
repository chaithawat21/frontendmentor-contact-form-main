import { useState } from "react";
import NameInput from "./components/NameInput";
import EmailInput from "./components/EmailInput";
import QueryTypeInput from "./components/QueryTypeInput";
import MessageInput from "./components/MessageInput";
import CheckInput from "./components/CheckInput";
import Dialog from "./components/Dialog";

function Form() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedOption: "",
    message: "",
    consentChecked: false,
  });
  const [selectedOption, setSelectedOption] = useState(null); 
  const [consentChecked, setConsentChecked] = useState(false); 
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleChange = (e) => {
    setInput(prv => ({...prv,[e.target.name]: e.target.value}))}

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    if (
      !input.firstName ||
      !input.lastName ||
      !input.email ||
      !input.message ||
      !consentChecked
    ) {
      return 
    }
    setIsDialogOpen(true)
    setFormSubmitted(false);
    setConsentChecked(false)
    setSelectedOption(null)
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      selectedOption: "",
      message: "",
      consentChecked: false,
  })
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }


  const handleRadioChange = (value) => {
    setSelectedOption(value); 
    setInput((prv) => ({...prv, selectedOption: value,}))}

  return (
<>
<Dialog 
    isDialogOpen={isDialogOpen}
    setIsDialogOpen={setIsDialogOpen}
    handleDialogClose={handleDialogClose}
    />
    <form
      className="max-w-[33rem]  bg-White p-[1.5rem] rounded-[10px] flex flex-col m-[1rem]"
      
      onSubmit={handleSubmit}
    >
      <h1 className=" text-[1.2rem] font-bold text-GreyDarker">Contact Us</h1>

      <NameInput 
      firstName={input.firstName} 
      lastName={input.lastName} 
      onChange={handleChange}
      formSubmitted={formSubmitted}
    
      />
      <EmailInput 
      email={input.email}  
      onChange={handleChange}
      formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <QueryTypeInput 
      handleRadioChange={handleRadioChange}
      selectedOption={selectedOption} 
      formSubmitted={formSubmitted}
      />
      <MessageInput 
      message={input.message} 
      onChange={handleChange}
      formSubmitted={formSubmitted} 
      />
      <CheckInput 
      setConsentChecked={setConsentChecked}
      consentChecked={consentChecked}
      formSubmitted={formSubmitted}
       />
      

      
      <button className="bg-GreenMedium mt-[.5rem] flex-grow text-White text-[.8rem] py-[.7rem] rounded-[5px] hover:bg-GreenDarker">
        Submit
      </button>
      
    </form>
  
    </>
  );
}

export default Form;
