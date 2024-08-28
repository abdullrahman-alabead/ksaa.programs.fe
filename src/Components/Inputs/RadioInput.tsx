import { useState } from "react";

const RadioInput = ({ choices, inputLabel, name }: { inputLabel: string; name: string; choices: string[] }) => {
  const [choseValue, setChoseValue] = useState("");
  return (
    <div className="mb-6">
      <p className="mb-2 text-green">{inputLabel}</p>
      <div className="placeholder w-full px-4 py-3 border-[1.5px] border-green rounded-lg focus:outline-none flex items-center gap-12">
        {choices.map((choice, i) => {
          return (
            <div key={i} className="flex items-center gap-4">
              <p className=" text-green">{choice}</p>
              <input
                required
                onClick={() => setChoseValue(choice)}
                type="radio"
                name={name}
                value={choice}
                className="accent-cyan"
              />
            </div>
          );
        })}
      </div>
      <input type="text" className="hidden" value={choseValue} name={name} />
    </div>
  );
};

export default RadioInput;
