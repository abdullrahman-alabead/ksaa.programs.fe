import { useState } from "react";

const MultipleChoiceInput = ({
  choices,
  inputLabel,
  name,
}: {
  inputLabel: string;
  name: string;
  choices: string[];
}) => {
  const [choseValues, setChoseValues] = useState<string[]>([]);

  return (
    <div className="mb-6">
      <p className="mb-2 text-green">{inputLabel}</p>
      <div className="w-full px-4 py-3 border-[1.5px] border-green rounded-lg focus:outline-none flex items-center gap-12">
        {choices.map((choice, i) => {
          return (
            <div key={i} className="flex items-center gap-4">
              <p className=" text-green">{choice}</p>
              <input
                type="checkbox"
                onClick={() => {
                  if (choseValues.includes(choice)) {
                    setChoseValues(choseValues.filter((choseChoice) => choseChoice != choice));
                  } else {
                    setChoseValues((curr) => [...curr, choice]);
                  }
                }}
                name={name}
                value={choice}
                className="accent-cyan"
              />
            </div>
          );
        })}
      </div>
      <input type="text" className="hidden" value={choseValues.join(", ")} name={name} />
    </div>
  );
};

export default MultipleChoiceInput;
