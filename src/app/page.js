"use client";
import Popup from "@/components/Popup";
import { useState } from "react";

export default function Home() {
  const [isActive, setActive] = useState(false);
  return (
    <main className="bg-primary flex justify-center min-h-screen p-24">
      <div className="flex flex-col text-center">
        <h1 className="text-[3rem] text-secondary"> SpookPumpkin 🎃 </h1>
        <p className="mt-4 text-[1.25rem]">
          Send secret pumpkin to your friends 👻
        </p>
        <button
          onClick={() => setActive(!isActive)}
          className="bg-button mt-[4rem] px-4 py-2 rounded-lg mx-[8rem]"
        >
          Create your pumpkin
        </button>
        {isActive && <Popup />}
      </div>
    </main>
  );
}
