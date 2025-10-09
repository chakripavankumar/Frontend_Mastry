const F3 = () => {
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
            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
            <path d="M3 10h18"></path>
            <path d="M10 3v18"></path>
          </svg>
          <span className="mt-1 inline-block"> F3</span>
        </div>
      </div>
    </div>
  );
};

export default F3;
