import React, { useContext, useState } from "react";
import { Modal } from "rsuite";
import LoaderSpiner from "../../common/Loader/LoaderSpiner";
import { useForm } from "react-hook-form";
import userLogin from "./auth";
import { AuthContext } from "../../../Context/AuthContext";

function LoginPupup({ open, setOpen }) {
  const { setLoginModal, setIsLogin } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function handleLogin(data) {
    userLogin(setLoginModal, setIsLogin);
  }

  return (
    <>
      <Modal
        size={"420px"}
        // style={{ width: "100%", maxWidth: "520px", margin: "auto" }}
        backdrop={"static"}
        keyboard={false}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Modal.Header className={`  `}>
          <Modal.Title className="capitalize">
            <div className="text-center">
              <h3 className="text-xl">Login</h3>
              <p className="text-gray text-sm">Enter Login Details</p>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(handleLogin)} className="p-2">
            <div className="inputBox mb-3">
              <label htmlFor="">
                Mobile <span>*</span>
              </label>
              <input
                type="number"
                className="formControl"
                {...register("mobile", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                })}
                placeholder="Enter Register Mobile No."
              />
              {errors?.mobile?.type === "required" && (
                <span className="inputWarning">This field is required</span>
              )}
              {(errors?.mobile?.type === "minLength" ||
                errors?.mobile?.type === "maxLength") && (
                <span className="inputWarning">
                  Please Enter a vald mobile no
                </span>
              )}
            </div>
            <div className="inputBox mb-3">
              <label htmlFor="">
                Password <span>*</span>
              </label>
              <input
                type="password"
                className="formControl"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
              {errors?.password?.type === "required" && (
                <span className="inputWarning">password is required</span>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading
                  ? "cursor-not-allowed pointer-events-none opacity-50 "
                  : ""
              } btn-primary w-full mt-4`}
            >
              <span>{loading ? <LoaderSpiner /> : "Login"}</span>
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginPupup;
