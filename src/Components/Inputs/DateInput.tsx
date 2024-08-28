const DateInput = ({ inputLabel, name }: { inputLabel: string; name: string }) => {
  return (
    <div className="mb-6">
      <p className="mb-2 text-green">{inputLabel}</p>

      <div className="placeholder w-full px-4 py-3 border-[1.5px] text-green border-green rounded-lg focus:outline-none">
        <input
          type="date"
          name={name}
          required
          style={{ direction: "ltr" }}
          className="bg-none px-0 w-28 focus:outline-none text-green"
        />
      </div>
    </div>
  );
};

export default DateInput;
