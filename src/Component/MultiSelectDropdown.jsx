import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import styles from "./Styles/Dropdown.module.css";

const MultiSelectDropdown = ({ courses, selectedCourses, showStudent }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!isEmpty(showStudent) && !isEmpty(courses)) {
      const { department } = courses[0];

      if (showStudent && department === showStudent.department) {
        setSelectedOptions(showStudent.courses);
      } else {
        setSelectedOptions([]);
      }
    }
  }, [courses, showStudent]);

  const handleCheckboxChange = (event, option) => {
    const value = event.target.value;

    if (event.target.checked) {
      if (!selectedOptions.includes(value)) {
        selectedOptions.push(value);
      }
      console.log("seleeeeeeeeeeeee", selectedOptions);
      selectedCourses(selectedOptions);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div className={styles.dropdown_container}>
      <div
        className={styles.dropdown_button}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Select Courses
      </div>
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
              <span className="fw-bold">{option}</span>
              {", "}
            </span>
          ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
