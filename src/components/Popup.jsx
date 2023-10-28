"use client";
import React, { useState } from "react";

const Popup = () => {
  const [pumpkin, setPumpkin] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div
      onSubmit={handleSubmit}
      className="mt-[4rem] px-2 py-4 rounded-lg bg-[#ff6d00]"
    >
      <form action="">
        <p className="text-[1.25rem] font-bold"> Make a pumpkin </p>
        <p className="my-4"> Pumpkin's name </p>
        <input
          className="text-black rounded-md px-2"
          placeholder="Jack O Lantern"
          type="text"
          value={pumpkin}
          onChange={(e) => setPumpkin(e.target.value)}
        />
        <p className="my-4"> Your message </p>
        <div className="flex flex-col items-center">
          <input
            className="text-black rounded-md px-2 mb-2"
            placeholder="Watch under your bed"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-button p-2 rounded-lg mt-4">
            <p>Create 🎃</p>
          </button>
        </div>
      </form>
      {submitted && (
        <div className="animate-bounce flex justify-center">
          <img className="relative mt-12 w-[300px]" src="/pumpkin.png" alt="" />
          <p className="text-[1.25rem] font-bold absolute top-[50%]">
            {pumpkin}
          </p>
          <p className="text-[1.25rem] absolute top-[70%]">{message}</p>
        </div>
      )}
      {submitted && (
        <button
          className="mt-4 bg-button p-2 rounded-md"
          onClick={() => {
            setSubmitted(false);
            setPumpkin("");
            setMessage("");
          }}
        >
          New pumpkin
        </button>
      )}
    </div>
  );
};

export default Popup;
