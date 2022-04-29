import './Select.scss'

const AppSelect = ({ options, currentValue, onValueChange, ...props }) => {
  return (
    <select
      className="select"
      {...props}
      value={currentValue}
      onChange={(e) => onValueChange(+e.target.value)}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default AppSelect
