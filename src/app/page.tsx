"use client";

import { useState } from "react";
import profiles from "@/data/profiles.json";

export default function Home() {
  const [step, setStep] = useState(1);
  const profile = profiles[0];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Anonymous Profile</h2>
          <ul className="mb-6">
            {profile.profile.map((item, index) => (
              <li key={index} className="mb-2">
                • {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setStep(2)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Guess the Identity
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Who is this?</h2>
          <div className="grid grid-cols-2 gap-4">
            {profile.options.map((name, index) => (
              <button
                key={index}
                onClick={() => setStep(3)}
                className="border px-4 py-2 rounded hover:bg-gray-200"
              >
                {name}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Correct Answer</h2>
          <p className="mb-4 font-semibold">{profile.correctAnswer}</p>
          <p className="mb-6">{profile.explanation}</p>
          <button
            onClick={() => setStep(1)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Restart
          </button>
        </>
      )}
    </main>
  );
}

