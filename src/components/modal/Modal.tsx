import { useState } from "react";
import "./Modal.css";

interface PropTypes {
  restart: any;
  resume: any;
}

const DisplayModal = ({ restart, resume }: PropTypes) => {
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState();
  const [checkedChild, setCheckedChild] = useState("");
  const [checkedParent, setCheckedParent] = useState("");

  const handleShow = () => {
    setShow(true);
  };

  const onChangeCheckedParent = (val: string) => {
    setCheckedParent(val);
  };
  const onChangeCheckedChild = (val: string) => {
    setCheckedChild(val);
  };
  const handleResume = () => {
    setTimer(resume);
  };

  const handleRestart = () => {
    setTimer(restart);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button type="button" className="text-gray-500" onClick={handleResume}>
          {" "}
          <svg
            className="block h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {timer}
        </button>
      </div>
      <form className="flex flex-col mx-auto font-poppins">
        <h2 className="mx-4 mb-4 text-2xl font-bold">
          Select a reason to end class
        </h2>
        <div className="ml-5 -mr-3">
          <div className="text-lg font-medium">
            <div className="mb-3 space-x-3 checkbox">
              <input
                type="checkbox"
                name="checkbox1"
                value="checkbox1"
                onChange={(e) => onChangeCheckedParent(e.target.value)}
                id="complete"
                checked={checkedParent === "checkbox1"}
              />
              <label htmlFor="complete">Class completed</label>
            </div>
            <div className="mb-3 space-x-3 checkbox" onClick={handleShow}>
              <input
                type="checkbox"
                name="checkbox1.1"
                value="checkbox2"
                checked={checkedParent === "checkbox2"}
                onChange={(e) => onChangeCheckedParent(e.target.value)}
                id="interrupted"
              />
              <label htmlFor="interrupted">Class interrupted/aborted</label>
            </div>
          </div>

          <div
            className={`px-3 text-sm ${
              show ? "block transform delay-1000" : "hidden opacity-0"
            }`}
          >
            <div className="w-full mb-3 space-x-3 checkbox-sm">
              <input
                type="checkbox"
                name="checkbox3"
                value="checkbox3"
                checked={
                  checkedChild === "checkbox3" && checkedParent === "checkbox2"
                }
                onChange={(e) => onChangeCheckedChild(e.target.value)}
                id="noshow"
              />
              <label htmlFor="noshow">
                Student didn't show up for the class.
              </label>
            </div>
            <div className="mb-3 space-x-3 checkbox-sm">
              {" "}
              <input
                type="checkbox"
                onChange={(e) => onChangeCheckedChild(e.target.value)}
                name="checkbox4"
                value="checkbox4"
                checked={
                  checkedChild === "checkbox4" && checkedParent === "checkbox2"
                }
                id="nointerest"
              />
              <label htmlFor="nointerest">
                Student didn't show any interest.
              </label>
            </div>
            <div className="mb-3 space-x-3 checkbox-sm">
              <input
                onChange={(e) => onChangeCheckedChild(e.target.value)}
                type="checkbox"
                name="checkbox5"
                value="checkbox5"
                checked={
                  checkedChild === "checkbox5" && checkedParent === "checkbox2"
                }
                id="disconnectedstd"
              />
              <label htmlFor="disconnectedstd">Student got disconnected.</label>
            </div>
            <div className="mb-3 space-x-3 checkbox-sm">
              <input
                type="checkbox"
                name="checkbox6"
                value="checkbox6"
                checked={
                  checkedChild === "checkbox6" && checkedParent === "checkbox2"
                }
                onChange={(e) => onChangeCheckedChild(e.target.value)}
                id="disconnectedyou"
              />
              <label htmlFor="disconnectedyou">I got disconnected.</label>
            </div>
            <div className="mb-3 space-x-3 checkbox-sm">
              <input
                type="checkbox"
                onChange={(e) => {
                  onChangeCheckedChild(e.target.value);
                }}
                name="checkbox7"
                value="checkbox7"
                checked={
                  checkedChild === "checkbox7" && checkedParent === "checkbox2"
                }
                id="other"
              />
              <label htmlFor="other">Other reasons</label>
            </div>
          </div>
          <div
            className={`${checkedChild === "checkbox7" ? "block" : "hidden"}`}
          >
            <textarea
              rows={4}
              cols={50}
              placeholder="Type here"
              className="w-11/12 pl-2 py-2 focus:outline-none my-3 border-1.5 rounded"
            />
          </div>
        </div>

        <div className="my-2">
          <button
            type="submit"
            className="w-4/12 py-2 ml-5 text-white rounded-md focus:outline-none bg-orange-border hover:opacity-95"
            onClick={handleRestart}
          >
            End Class
          </button>
          <button
            type="button"
            className="px-2 py-2 ml-3 text-gray-600 border border-white rounded-md focus:outline-none hover:border-orange-border"
            onClick={handleResume}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisplayModal;
