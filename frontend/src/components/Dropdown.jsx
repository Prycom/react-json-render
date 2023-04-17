const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <label className='dropdown-select text-black'>
            <h1>{label}</h1>
            <select value={value} onChange={onChange}>
                  {Array.from(options).map((opt) => (
                    <option key={opt} value={opt} onClick={onChange}>{opt}</option>
                  ))}
              </select>
        </label>
    );
};

export default Dropdown;