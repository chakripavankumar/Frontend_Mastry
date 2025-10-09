const Power = () => {
  return (
    <div className="cursor-pointer rounded-sm bg-white/[0.2] p-1 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#0A090D]">
        <div className="flex w-full flex-col items-center justify-center text-[5px] text-white">
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
