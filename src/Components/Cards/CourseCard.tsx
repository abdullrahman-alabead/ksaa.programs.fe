const CourseCard = ({ index, title }: { title: string; index: number }) => {
  return (
    <div className="relative w-full aspect-[16/11] rounded-md border-2 border-green flexCenter text-center px-3">
      <p>{title}</p>
      <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-10 aspect-square rounded-full bg-green text-white flexCenter">
        {index}
      </span>
    </div>
  );
};

export default CourseCard;
