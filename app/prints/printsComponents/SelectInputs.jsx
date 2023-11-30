const SelectInput = ({name, options, selectedOptions, setSelectedOptions}) => (
  <>
    <label htmlFor={name}>{name}</label>
    <select
      name={name}
      id={name}
      value={selectedOptions[name]}
      onChange={event => {
        const {name, value} = event.target;
        setSelectedOptions(prevOptions => ({
          ...prevOptions,
          [name]: value,
        }));
      }}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </>
);
export default SelectInput;
