import { useState } from "react";
import "./Modal.css";

interface PropTypes {
  restart: any;
  resume: any;
}

const DisplayModal = ({ restart, resume }: PropTypes) => {
  const [show, setShow] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [timer, setTimer] = useState();
  const [checked, setCheckBoxChecked] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleOtherReasons = () => {
    setShowTextArea(true);
  };

  const onChangeChecked = () => {
    setCheckBoxChecked(checked);
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
            <div className="mb-3 space-x-3 checkbox" onChange={onChangeChecked}>
              <input type="checkbox" name="complete" id="complete" />
              <label htmlFor="complete">Class completed</label>
            </div>
            <div
              className="mb-3 space-x-3 checkbox"
              onClick={handleShow}
              onChange={onChangeChecked}
            >
              <input type="checkbox" name="interrupted" id="interrupted" />
              <label htmlFor="interrupted">Class interrupted/aborted</label>
            </div>
          </div>

          <div className={`px-3 text-sm ${show ? "block" : "hidden"}`}>
            <div
              className="w-full mb-3 space-x-3 checkbox-sm"
              onChange={onChangeChecked}
            >
              <input type="checkbox" name="noshow" id="noshow" />
              <label htmlFor="noshow">
                Student didn't show up for the class.
              </label>
            </div>
            <div
              className="mb-3 space-x-3 checkbox-sm"
              onChange={onChangeChecked}
            >
              <input type="checkbox" name="nointerest" id="nointerest" />
              <label htmlFor="nointerest">
                Student didn't show any interest.
              </label>
            </div>
            <div
              className="mb-3 space-x-3 checkbox-sm"
              onChange={onChangeChecked}
            >
              <input
                type="checkbox"
                name="disconnectedstd"
                id="disconnectedstd"
              />
              <label htmlFor="disconnectedstd">Student got disconnected.</label>
            </div>
            <div className="mb-3 space-x-3 checkbox-sm">
              <input
                type="checkbox"
                name="disconnectedyou"
                id="disconnectedyou"
              />
              <label htmlFor="disconnectedyou">I got disconnected.</label>
            </div>
            <div
              className="mb-3 space-x-3 checkbox-sm"
              onClick={handleOtherReasons}
            >
              <input type="checkbox" name="other" id="other" />
              <label htmlFor="other">Other reasons</label>
            </div>
          </div>
          <div className={`${showTextArea ? "block" : "hidden"}`}>
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
