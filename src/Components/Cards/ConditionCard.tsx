const ConditionCard = ({ icon, text }: { text: string; icon: string }) => {
  return (
    <div className="w-full flex flex-col items-center p-5 rounded-xl border-[1px] text-white border-white">
      <div className="flexCenter w-14 aspect-square rounded-full bg-white text-balance mb-6">
        <img src={icon} className="w-8 h-8 object-contain" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} className="text-center h-20 flexCenter " />
    </div>
  );
};

export default ConditionCard;
