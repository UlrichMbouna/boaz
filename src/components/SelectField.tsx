import React from 'react';


interface SelectFieldProps {
  id: string;
  label: string;
  options?: string[];
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, label, options = [], required = false }) => {
    return (
      <div className="w-[393px] h-[52px] m-2">
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-red-500 dark:text-white"style={{color:'#5E6366',fontSize:12,fontWeight:400}}>
          {label}
        </label>
        <select
          id={id}
          required={required}
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectField;