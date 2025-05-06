import React, { useState } from 'react';

interface SelectFieldProps {
  id: string;
  label: string;
  description: string;
}

const SelectedField: React.FC<SelectFieldProps> = ({ id, label, description }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-[393px] m-2">
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium"
        style={{ color: '#5E6366', fontSize: 12, fontWeight: 400 }}
      >
        {label}
      </label>
      
      <button
        onClick={() => setSelected(!selected)}
        className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 flex items-center justify-between"
      >
        <span>{selected ? "Cacher l'explication" : "Voir l'explication"}</span>
        
        {/* Utilisation de Tailwind CSS pour chevron */}
        <span className={`ml-2 transform ${selected ? 'rotate-180' : 'rotate-0'} transition-transform`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="text-gray-500"
          >
            <path d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" />
          </svg>
        </span>
      </button>

      {selected && (
        <p style={{
          backgroundColor: '#F9FAFB',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          color:'#495AFF',
          padding: '40px',
          fontSize: '14px',
          fontWeight: '400',
          textAlign: 'center',
        }} className="mt-2 text-xs text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default SelectedField;
