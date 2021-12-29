const Button = (props) => {
  const { label, onClickHandler } = props;
  return (
    <button className="w-full py-2 text-white my-4 rounded-lg bg-blue-900 hover:bg-blue-700" onClick={onClickHandler}>
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
