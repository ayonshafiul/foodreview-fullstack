const Input = (props) => {
    const {name, value, setValue, placeholder ="", inputType ="text"} = props;
  return (
    <div>
      <label
        className="text-gray-800 font-semibold block my-3 text-md"
        for={name}
      >
        {name.toUpperCase()}
      </label>
      <input
        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type={inputType}
        name={name}
        placeholder={name}
        onChange={(event) => {setValue(event.target.value)}}
      />
    </div>
  );
};

export default Input;
