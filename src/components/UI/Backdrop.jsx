import style from "./Error.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={style.backdrop}
      onClick={props.onConfirm}
    />
  );
};

export default Backdrop;
