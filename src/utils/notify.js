import { toast } from "react-toastify";

const defaultOptions = {
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: true,
  autoClose: 3000,
  theme: "colored",
};

const info = (message = "", autoClose = defaultOptions.autoClose, position = defaultOptions.position) => {
  toast.info(<p className="text-white tx-16 mb-0">{message}</p>, {
    ...defaultOptions,
    autoClose,
    position,
  });
};

const success = (message = "", autoClose = defaultOptions.autoClose, position = defaultOptions.position) => {
  toast.success(<p className="text-white tx-16 mb-0">{message}</p>, {
    ...defaultOptions,
    autoClose,
    position,
  });
};

const warning = (message = "", autoClose = defaultOptions.autoClose, position = defaultOptions.position) => {
  toast.warning(<p className="text-white tx-16 mb-0">{message}</p>, {
    ...defaultOptions,
    autoClose,
    position,
  });
};

const error = (message = "", autoClose = defaultOptions.autoClose, position = defaultOptions.position) => {
  toast.error(<p className="text-white tx-16 mb-0">{message}</p>, {
    ...defaultOptions,
    autoClose,
    position,
  });
};

export const Notify = { info, success, warning, error };
