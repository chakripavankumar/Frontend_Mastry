const Esc = () => {
  return (
    <div className="cursor-pointer rounded-sm bg-white/[0.2] p-1 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
      <div className="flex h-6 w-10 items-end justify-start rounded-sm bg-[#0A090D] pb-1 pl-1">
        <div className="flex w-full flex-col items-start justify-center text-[5px] text-white">
          esc
        </div>
      </div>
    </div>
  );
};

export default Esc;
