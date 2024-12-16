import { Modal } from "rsuite";
import LoaderSpiner from "../Loader/LoaderSpiner";

function CustomModal({
  isHeader = true,
  open,
  setOpen,
  body,
  title,
  onConfirm,
  size,
  loading,
}) {
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Modal
        size={size ? size : "520px"}
        backdrop={"static"}
        keyboard={false}
        open={open}
        onClose={handleClose}
      >
        <Modal.Header
          className={` ${
            isHeader
              ? "p-5 bg-[color:var(--background-light)] dark:bg-[color:var(--background-dark-light)] "
              : ""
          }  `}
        >
          <Modal.Title className="capitalize">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {body}

          <div
            className={`flex p-4 pt-0 items-center gap-2 mt-5 ${
              isHeader ? "justify-end" : "justify-center"
            } `}
          >
            <button
              onClick={() => {
                setOpen(false);
              }}
              type="button"
              className=" btn btn-cancel"
            >
              Cancel
            </button>

            <button
              disabled={loading}
              onClick={onConfirm}
              type="button"
              className={`${
                loading
                  ? "cursor-not-allowed pointer-events-none opacity-50"
                  : ""
              } btn btn-ok`}
            >
              {loading ? <LoaderSpiner /> : "Confirm"}
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;
