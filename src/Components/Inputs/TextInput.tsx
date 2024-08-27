const TextInput = ({ inputLabel, name }: { inputLabel: string; name: string }) => {
  return (
    <div className="mb-6">
      <p className="mb-2 text-green">{inputLabel}</p>
      <input
        type="text"
        className="w-full px-4 py-3 border-[1.5px] border-green rounded-lg focus:outline-none"
        name={name}
        required
      />
    </div>
  );
};

export default TextInput;
