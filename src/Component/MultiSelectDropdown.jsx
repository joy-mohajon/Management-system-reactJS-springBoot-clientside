import { useState } from "react";
import styles from "./Styles/Dropdown.module.css";

const MultiSelectDropdown = ({ courses, selectedCourses }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCheckboxChange = (event, option) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
      selectedCourses(selectedOptions);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div className={styles.dropdown_container}>
      <button
        className={styles.dropdown_button}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Select Courses
      </button>
      {showDropdown && (
        <div className={styles.dropdown_menu}>
          {courses &&
            courses.map((option, index) => (
              <label key={index} className="d-flex justify-content-between">
                <span>
                  <input
                    type="checkbox"
                    value={option.c_name}
                    onChange={(event) => handleCheckboxChange(event, option)}
                    checked={selectedOptions.includes(option.c_name)}
                  />
                  {option.c_name}
                </span>
                <span>{option.c_credit}</span>
              </label>
            ))}
        </div>
      )}
      <div className={`${styles.selected_options}`}>
        {selectedOptions &&
          selectedOptions.map((option) => (
            <span key={option}>
              <span className="fw-bold">{option}</span>,{" "}
            </span>
          ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
