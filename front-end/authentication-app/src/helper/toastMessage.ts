import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const showToast = (message: string, type: string) => {
  switch (type) {
    case "success":
      toast.success(message, { className: "toast-padding toast-message-padding" });
      break;
    case "error":
      toast.error(message, { className: "toast-padding toast-message-padding" });
      break;
    case "warning":
      toast.warning(message, { className: "toast-padding" });
      break;
    default:
      toast.info(message, { className: "toast-padding" });
      break;
  }
};

export default showToast;
