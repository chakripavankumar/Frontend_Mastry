const Responsive = () => {
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row">
      <div className="h-10 w-10 rounded-2xl bg-neutral-300"></div>
      <div className="h-10 w-10 rounded-2xl bg-red-600"></div>
      <div className="h-10 w-10 rounded-2xl bg-blue-600"></div>
    </div>
  );
};

export default Responsive;
