import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useTimer } from "react-timer-hook";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Modal, Backdrop } from "@material-ui/core";
import "core-js";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import DisplayModal from "./modal/Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #fff",
      borderRadius: "5px",
      boxShadow: theme.shadows[4],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const Header = () => {
  //mobile hamburger
  const [isOpen, setIsOpen] = useState(false);

  //timer
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 600);
  const { seconds, minutes, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  //modal
  const classes = useStyles();
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <nav className="bg-white font-poppins">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-40 h-20 md:hidden"
                  src="/assets/logo-with-text.svg"
                  alt="codingal"
                />
                <img
                  className="hidden w-9 md:block"
                  src="/assets/logo.png"
                  alt="codingal"
                />
                <div className="border-r-1.5 ml-3 hidden md:block absolute left-20 top-1 h-14 border-gray-300">
                  <span></span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <p className="px-3 py-2 text-sm font-bold text-gray-600 rounded-md hover:text-white">
                    Trial Lesson [Grade 1-3]
                  </p>
                </div>
              </div>
            </div>
            <div className="items-center hidden space-x-4 md:flex">
              <Link to="/posts">
                <button>Posts</button>
              </Link>
              <p className="text-sm font-bold text-gray-600 font-poppins">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
              </p>
              <button
                className="px-5 py-2 text-sm font-semibold text-white transition rounded bg-orange-border focus:outline-none hover:bg-opacity-90 font-poppins"
                onClick={handleModalOpen}
              >
                End class
              </button>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-black transition bg-white rounded-md hover:text-white hover:bg-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="mx-4 rounded-md md:hidden bg-orange-border"
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <p className="block px-3 py-2 text-base font-bold text-center text-black rounded-md hover:bg-white hover:text-black">
                  34:40
                </p>
                <button className="block w-full px-3 py-2 text-base font-semibold text-black rounded-md bg-orange-bg hover:bg-white hover:text-black">
                  End class
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={modal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal}>
          <div className={classes.paper}>
            <DisplayModal />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
