import { CircleX } from "lucide-react";
import '../App.css';
import { useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { stateOfIndia } from "../assets/state";

export function Signup({ closeSignUp }) {
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");

  const otpInputRef = useRef([]);
  console.log(otp);


  const handleOtpChange = (e, index) => { 
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === 6) {
      // check if otp is correct
      if (combinedOtp === "123456") {
        console.log("OTP is correct");
      } else {  
        console.log("OTP is incorrect");
      }
    }
  }
  return (
    <>
      <div
        className="moral-div fixed bg-[#7f7f7f] bg-opacity-30 inset-0 text-blackflex justify-center items-center"
        onClick={closeSignUp}
      ></div>
      {
        <div
          className="modal-body fixed top-1/2 left-1/2 transform -translate-x-1/2
       -translate-y-1/2 bg-white p-4 rounded-3xl shadow-lg flex flex-col"
        >
          <div className=" flex flex-row gap-20  justify-between">
            <div></div>
            <h2 className="text-xl font-[700] ml-30">Signup</h2>
            <button className="" onClick={closeSignUp}>
              <CircleX fill="#146fe6" size={20} color="white" className="" />
            </button>
          </div>

          {/* Email  */}
          <div className="flex flex-col mt-8">
            <Input
              type="email"
              placeholder="Enter you email id"
              value={email}
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailCorrect(true);
              }}
            />

            {/* OTP input are */}
            {!isEmailCorrect && (
              <div className="text-red-500 text-sm mt-2">
                ( *Please enter correct email )
              </div>
            )}
            {showOtp && (
              <div className="flex flex-row gap-4 mt-4">
                <div className="mt-2 text-green-700">Enter OTP:</div>
                <div className="flex flex-row gap-2 marker:">
                  {otp.map((data, index) => (
                    <input
                      type="text"
                      key={index}
                      value={data}
                      // ref={(ref) => (otpInputRef.current[index] = ref)}
                      onChange={(e) => handleOtpChange(e, index)}
                      className="border-2 rounded-3xl h-11 w-11 p-3 text-center"
                    />
                  ))}
                </div>
                {isOtpCorrect && <div>*Wrong OTP</div>}
              </div>
            )}

            <Input
              type="text"
              placeholder="Enter your Full Name"
              value={name}
              label="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              label="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Enter your Password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="state" className="font-[500]">
              State
            </label>
            <select
              name="state"
              id="state"
              value={state}
              className="border-2 rounded-3 xl h-11 w-[466.4px] p-2 text-black mt-2"
              onChange={(e) => {
                setState(e.target.value)
                console.log(state);
              }}
            >
              {stateOfIndia.map((state) => {
                return (
                  <option
                    key={state.value}
                  >
                    {state.value}
                  </option>
                );
              })}
            </select>
            {/* Form submit button */}
            <input
              type="button"
              value="Submit"
              onClick={() => {
                //form submission call backend here
              }}
              className="bg-[#146fe6] hover:bg-[#0a5dc9]
               text-white font-bold py-3 px-4 rounded-3xl w-20 place-self-center mt-4"
            />
          </div>
        </div>
      }
    </>
  );
}

