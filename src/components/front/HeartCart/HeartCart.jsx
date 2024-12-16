function HeartCart({ isWishList }) {
  return (
    <div className="flex gap-3">
      <button
        className={` ${
          isWishList && "added"
        } heart heartButton transition-all group hover:bg-blue-500 h-9 w-9 flex items-center justify-center  p-1 rounded-full bg-white shadow-md`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 25 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-slate-600"
        >
          <path
            d="M21.6335 11.9751L14.3265 19.2833C13.8421 19.7676 13.1851 20.0397 12.5001 20.0397C11.8151 20.0397 11.1581 19.7676 10.6737 19.2833L3.36672 11.9764C2.7627 11.3776 2.28289 10.6655 1.95484 9.88077C1.62679 9.09608 1.45696 8.25432 1.45509 7.40383C1.45323 6.55333 1.61938 5.71084 1.94399 4.92472C2.2686 4.13861 2.74529 3.42435 3.34668 2.82295C3.94808 2.22156 4.66233 1.74487 5.44845 1.42026C6.23456 1.09565 7.07706 0.929504 7.92755 0.931366C8.77805 0.933229 9.61981 1.10306 10.4045 1.43111C11.1892 1.75916 11.9013 2.23897 12.5001 2.843C13.7163 1.65708 15.3507 0.998064 17.0494 1.00871C18.748 1.01935 20.3741 1.6988 21.5753 2.89986C22.7766 4.10092 23.4562 5.72689 23.4671 7.42554C23.478 9.12418 22.8192 10.7587 21.6335 11.9751Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* <button className="cartButton  transition-all group hover:bg-blue-500 h-9 w-9 flex items-center justify-center  p-1 rounded-md bg-white shadow-md">
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" fill-slate-600"
        >
          <path d="M18.1579 18.1579C18.8 18.1579 19.4158 18.413 19.8698 18.867C20.3239 19.321 20.5789 19.9368 20.5789 20.5789C20.5789 21.2211 20.3239 21.8369 19.8698 22.2909C19.4158 22.7449 18.8 23 18.1579 23C17.5158 23 16.9 22.7449 16.446 22.2909C15.9919 21.8369 15.7368 21.2211 15.7368 20.5789C15.7368 19.9368 15.9919 19.321 16.446 18.867C16.9 18.413 17.5158 18.1579 18.1579 18.1579ZM18.1579 19.3684C17.8368 19.3684 17.5289 19.496 17.3019 19.723C17.0749 19.95 16.9474 20.2579 16.9474 20.5789C16.9474 20.9 17.0749 21.2079 17.3019 21.4349C17.5289 21.6619 17.8368 21.7895 18.1579 21.7895C18.4789 21.7895 18.7868 21.6619 19.0139 21.4349C19.2409 21.2079 19.3684 20.9 19.3684 20.5789C19.3684 20.2579 19.2409 19.95 19.0139 19.723C18.7868 19.496 18.4789 19.3684 18.1579 19.3684ZM7.26316 18.1579C7.90526 18.1579 8.52106 18.413 8.9751 18.867C9.42914 19.321 9.68421 19.9368 9.68421 20.5789C9.68421 21.2211 9.42914 21.8369 8.9751 22.2909C8.52106 22.7449 7.90526 23 7.26316 23C6.62106 23 6.00525 22.7449 5.55122 22.2909C5.09718 21.8369 4.84211 21.2211 4.84211 20.5789C4.84211 19.9368 5.09718 19.321 5.55122 18.867C6.00525 18.413 6.62106 18.1579 7.26316 18.1579ZM7.26316 19.3684C6.94211 19.3684 6.6342 19.496 6.40719 19.723C6.18017 19.95 6.05263 20.2579 6.05263 20.5789C6.05263 20.9 6.18017 21.2079 6.40719 21.4349C6.6342 21.6619 6.94211 21.7895 7.26316 21.7895C7.58421 21.7895 7.89211 21.6619 8.11913 21.4349C8.34615 21.2079 8.47368 20.9 8.47368 20.5789C8.47368 20.2579 8.34615 19.95 8.11913 19.723C7.89211 19.496 7.58421 19.3684 7.26316 19.3684ZM20.5789 3.63158H3.95842L7.04526 10.8947H16.9474C17.3468 10.8947 17.6979 10.7011 17.9158 10.4105L21.5474 5.56842C21.7047 5.36263 21.7895 5.10842 21.7895 4.84211C21.7895 4.52105 21.6619 4.21315 21.4349 3.98613C21.2079 3.75912 20.9 3.63158 20.5789 3.63158ZM16.9474 12.1053H7.10579L6.17368 13.9937L6.05263 14.5263C6.05263 14.8474 6.18017 15.1553 6.40719 15.3823C6.6342 15.6093 6.94211 15.7368 7.26316 15.7368H20.5789V16.9474H7.26316C6.62106 16.9474 6.00525 16.6923 5.55122 16.2383C5.09718 15.7842 4.84211 15.1684 4.84211 14.5263C4.84175 14.1156 4.94589 13.7115 5.14474 13.3521L6.01632 11.5726L1.62211 1.21053H0V0H2.42105L3.45 2.42105H20.5789C21.2211 2.42105 21.8369 2.67613 22.2909 3.13016C22.7449 3.5842 23 4.2 23 4.84211C23 5.44737 22.7942 5.95579 22.4553 6.36737L18.9326 11.0763C18.4968 11.6937 17.7705 12.1053 16.9474 12.1053Z" />
        </svg>
      </button> */}
    </div>
  );
}

export default HeartCart;
