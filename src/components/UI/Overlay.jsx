import style from "./Error.module.css"
import Card from "./Card";
import Button from "./Button";
const Overlay = (props) => {
    return (
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
  
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  export default Overlay;