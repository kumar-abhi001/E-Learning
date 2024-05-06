import { CircleX } from "lucide-react";
import '../App.css';
export function Signup({ closeSignUp }) {
  return (
    <>
      <div
        className="moral-div fixed bg-[#7f7f7f] bg-opacity-30 inset-0 text-black flex justify-center items-center"
        onClick={closeSignUp}
      ></div>
      <div className="modal-body fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-3xl shadow-lg flex flex-col">
        <div className=" flex flex-row gap-20  justify-end">
          <h2 className="text-xl font-[700]">Enter email/phone number</h2>
          <button className="" onClick={closeSignUp}>
            <CircleX fill="#146fe6" size={20} color="white" className="" />
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="mb-2 font-[500]">
            Enter number/email id
          </label>
          <input
            type="text"
            placeholder="Enter your phone or email id"
            className="border-2 rounded-3xl h-11 w-[466.4px] p-3"
          />
          <input
            type="button"
            value="Next"
            className="bg-[#146fe6] hover:bg-[#0a5dc9]
               text-white font-bold py-3 px-4 rounded-3xl w-20 place-self-center mt-4"
          />
        </div>
      </div>
    </>
  );
}

