import "./styles.css";

const Switch = ({ name, state, setState, items }) => {
  return (
    <div className="switch">
      {items.map((item, key) => (
        <input
          key={key}
          type="radio"
          className="radio-switch"
          name={name}
          id={item.id}
          onClick={() => {
            setState(item.id);
          }}
        />
      ))}
      {items.map((item, key) => (
        <label
          key={key}
          style={{ width: `${100 / items.length}%` }}
          className={`option switch-option-${
            state === item.id ? "selected" : ""
          }`}
          htmlFor={item.id}
        >
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default Switch;
