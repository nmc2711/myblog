import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CLEAR_ERROR_REQUEST } from "../../redux/types";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [localMsg, setLocalMsg] = useState("");
  const { errorMsg } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST,
    });
    setModal(!modal);
  };
  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.error(e);
    }
  }, [errorMsg]);

  const onChnage = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    const newUser = { name, email, password };
    console.log(newUser);
  };
};
export default RegisterModal;
