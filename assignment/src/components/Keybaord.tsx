import FristRow from "./FristRow";
import SecondRow from "./SecondRow";

const Keyboard = () => {
  return (
    <div className="relative mx-auto mt-20 flex flex-col items-center justify-center rounded-md bg-zinc-800 p-2 shadow-lg">
      <FristRow />

      <SecondRow />
    </div>
  );
};

export default Keyboard;
