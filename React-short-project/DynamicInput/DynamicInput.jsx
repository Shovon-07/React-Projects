//===> Need tailwind css

import { useState } from "react";

//===> Icons
import { RxCross2 } from "react-icons/rx";

export default function DynamicInputFields() {
  const [fields, setFields] = useState([""]);

  const addField = () => {
    setFields([...fields, ""]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Dynamic Input Fields</h2>
      {fields.map((field, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={field}
            onChange={(e) => handleChange(index, e.target.value)}
            className="p-2 border rounded w-full"
            placeholder={`Field ${index + 1}`}
          />
          <button size="icon" onClick={() => removeField(index)}>
            <RxCross2 className="icon" />
          </button>
        </div>
      ))}
      <button onClick={addField} className="mt-2">
        Add More
      </button>
    </div>
  );
}
