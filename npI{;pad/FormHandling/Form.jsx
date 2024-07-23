import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  //   const handleSubmit = (data)=>{
  //     handleFormSubmitData(data);
  //     resetb()
  //   }
t
  return (
    <div className=" justify-center flex mt-7">
      <form
        onSubmit={handleSubmit((data) => {
          handleFormSubmitData(data);
          reset();
        })}
        className="flex justify-center gap-2"
      >
        <input
          {...register("name")}
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Enter your name"
        />
        <input
          {...register("email")}
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          {...register("image")}
          className=" rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Enter image URL"
        />
        <button
          className="px-3 py-1 bg-red-600 text-white rounded-full  font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
