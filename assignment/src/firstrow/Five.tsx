const Five = () => {
  return (
    <div className="cursor-pointer rounded-sm bg-white/[0.2] p-1 shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none">
      <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#0A090D]">
        <div className="flex w-full flex-col items-center justify-center text-[5px] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-1 w-1"
          >
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
            <path d="M5 10a7 7 0 0 0 14 0"></path>
            <path d="M8 21l8 0"></path>
            <path d="M12 17l0 4"></path>
          </svg>
          <span className="mt-1 inline-block">F5</span>
        </div>
      </div>
    </div>
  );
};

export default Five;
