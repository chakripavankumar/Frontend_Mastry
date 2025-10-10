import FifthRow from "./FifthRow";
import FourthRow from "./FourthRow";
import FristRow from "./FristRow";
import SecondRow from "./SecondRow";
import ThridRow from "./ThridRow";

const Keyboard = () => {
  return (
    <div className="relative mx-auto mt-20 flex flex-col items-center justify-center rounded-md bg-zinc-800 p-2 shadow-lg">
      <FristRow />
      <SecondRow />
      <ThridRow />
      <FourthRow />
      <FifthRow />
    </div>
  );
};

export default Keyboard;
