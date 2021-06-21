import "./Modal.css";

const DisplayModal = () => {
  return (
    <div>
      <div className="flex justify-end">
        <button type="button" className="text-gray-500">
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
        </button>
      </div>
      <form className="flex flex-col font-Roboto">
        <h2 className="mb-4 ml-4 text-2xl font-bold">
          Select a reason to end class
        </h2>
        <div className="-mr-3 ml-11">
          <div className="text-lg">
            <div className="mb-3 space-x-3">
              <input type="checkbox" name="complete" id="complete" />
              <label htmlFor="complete">Class completed</label>
            </div>
            <div className="mb-3 space-x-3">
              <input type="checkbox" name="interrupted" id="interrupted" />
              <label htmlFor="interrupted">Class interrupted/aborted</label>
            </div>
          </div>

          <div className="px-3 text-base">
            <div className="mb-3 space-x-3">
              <input type="checkbox" name="noshow" id="noshow" />
              <label htmlFor="noshow">
                Student didn't show up for the class.
              </label>
            </div>
            <div className="mb-3 space-x-3">
              <input type="checkbox" name="nointerest" id="nointerest" />
              <label htmlFor="nointerest">
                Student didn't show any interest.
              </label>
            </div>
            <div className="mb-3 space-x-3">
              <input
                type="checkbox"
                name="disconnectedstd"
                id="disconnectedstd"
              />
              <label htmlFor="disconnectedstd">Student got disconnected.</label>
            </div>
            <div className="mb-3 space-x-3">
              <input
                type="checkbox"
                name="disconnectedyou"
                id="disconnectedyou"
              />
              <label htmlFor="disconnectedyou">I got disconnected.</label>
            </div>
            <div className="mb-3 space-x-3">
              <input type="checkbox" name="other" id="other" />
              <label htmlFor="other">Other reasons</label>
            </div>
            <div>
              <textarea
                rows={4}
                cols={50}
                placeholder="Type here"
                className="w-11/12 pl-2 py-2 -ml-6 my-3 border-1.5 rounded"
              />
            </div>
          </div>
        </div>

        <div className="my-2">
          <button
            type="submit"
            className="w-4/12 py-2 ml-5 text-white rounded-md bg-orange-border hover:opacity-95"
          >
            End Class
          </button>
          <button type="button" className="ml-3 text-gray-600 bg-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisplayModal;
