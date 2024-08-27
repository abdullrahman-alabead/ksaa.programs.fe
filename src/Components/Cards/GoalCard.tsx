const GoalCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="w-full aspect-square bg-lightGray rounded-md flex flex-col items-center p-4">
      <div className="flexCenter w-14 aspect-square rounded-full bg-white text-balance mb-6">
        <img src={icon} className="w-8 h-8 object-contain" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} className="text-green text-center" />
    </div>
  );
};

export default GoalCard;
