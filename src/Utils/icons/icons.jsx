import { LiaUserEditSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
const icons = {
  rightArrow: (w, h, className) => {
    return (
      <svg
        width={w}
        height={h ? h : w}
        className={className}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12L31 24L19 36"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  action: (className) => {
    return <SlCalender className={className} />;
  },
};

export default icons;
