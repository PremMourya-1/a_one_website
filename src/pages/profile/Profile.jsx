import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import profile from "../../assets/images/profile.png";
import { ImBooks } from "react-icons/im";
function Profile() {
  return (
    <>
      <div className=" pb-[120px] pt-16 bg-gradient-to-r from-slate-100 to-slate-400 ">
        <div className="container">
          <div className="flex">
            <div className="max-w-[68%] lg:max-w-full  shrink-0">
              <h2 className="text-3xl font-semibold ">My Profile</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionPadding -mt-[150px]">
        <div className="container">
          <div className="flex justify-between lg:flex-col lg:gap-4">
            <div className="left p-5 bg-white w-full max-w-[70%] lg:max-w-full rounded-xl shadow-xl me-3 lg:me-0 border">
              <h3 className="font-semibold text-lg mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="inputBox col-span-2">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="formControl"
                    placeholder="Tony Stark"
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Mobile No.</label>
                  <input
                    type="text"
                    className="formControl"
                    placeholder="+91 8899 5478 987 "
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="formControl"
                    placeholder="starkindustries@gmail.com"
                  />
                </div>
                <div className="inputBox col-span-2">
                  <label htmlFor="">Address</label>
                  <textarea
                    name=""
                    className="formControl"
                    id=""
                    placeholder="India"
                  ></textarea>
                </div>
              </div>

              <button className="btn-primary ms-auto block w-max mt-6">
                <span>Save Changes</span>
              </button>
            </div>

            <div className="right h-max sticky top-8 w-full max-w-[30%] lg:max-w-full p-5 bg-white rounded-xl shadow-xl ms-3 lg:ms-0 border">
              <div className="flex flex-col justify-center text-cener gap-4 items-center">
                <div className="h-20 w-20 rounded-full bg-light">
                  <img
                    className="h-full w-full object-cover"
                    src={profile}
                    alt="user_profile_image"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="name capitalize text-center">
                  <span className="block ">Alyxa nice</span>
                  <span className="block text-sm text-gray-500 lowercase">
                    Alyxanice123@gmail.com
                  </span>
                </div>
              </div>

              <div className="buttons flex gap-2 mt-6">
                <Link
                  to={"/my-courses"}
                  className="btn-primary btn-primary flex gap-2 flex-1 items-center justify-center text-center"
                >
                  <span className="">
                    <ImBooks className="text-lg" />
                  </span>
                  <span>My Courses</span>
                </Link>
                <button className="btn-primary flex gap-2 flex-1 items-center justify-center text-center">
                  <span className="">
                    <FiLogOut />
                  </span>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
