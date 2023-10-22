import "./Button.css";

function Button(props) {
  return (
    <button
      className={`Button ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
