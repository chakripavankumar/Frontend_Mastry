const F2 = () => {
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
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M12 5l0 -2"></path>
            <path d="M17 7l1.4 -1.4"></path>
            <path d="M19 12l2 0"></path>
            <path d="M17 17l1.4 1.4"></path>
            <path d="M12 19l0 2"></path>
            <path d="M7 17l-1.4 1.4"></path>
            <path d="M6 12l-2 0"></path>
            <path d="M7 7l-1.4 -1.4"></path>
          </svg>
          <span className="mt-1 inline-block">F2</span>
        </div>
      </div>
    </div>
  );
};

export default F2;
