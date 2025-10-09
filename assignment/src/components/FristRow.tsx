import Eight from "../firstrow/Eight";
import Eleven from "../firstrow/Eleven";
import Esc from "../firstrow/Esc";
import F1 from "../firstrow/F1";
import F2 from "../firstrow/F2";
import F3 from "../firstrow/F3";
import F4 from "../firstrow/F4";
import Five from "../firstrow/Five";
import Nine from "../firstrow/Nine";
import Power from "../firstrow/Power";
import Seven from "../firstrow/Seven";
import Six from "../firstrow/Six";
import Ten from "../firstrow/Ten";

const FristRow = () => {
  return (
    <div className="mb-1 flex w-full shrink-0 gap-1">
      <Esc />
      <F1 />
      <F2 />
      <F3 />
      <F4 />
      <Five />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
      <Power />
    </div>
  );
};

export default FristRow;
