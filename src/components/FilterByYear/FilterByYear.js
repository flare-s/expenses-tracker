import React from "react";
import styles from "./FilterByYear.module.scss";
const FilterByYear = (props) => {
  const { year, changeYear } = props;
  return (
    <div>
      <form className={styles.form}>
        <label htmlFor="year">Expenses year</label>
        <select
          id="year"
          name="expenses-year"
          value={year}
          onChange={(e) => changeYear(e.target.value)}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </form>
    </div>
  );
};

export default FilterByYear;
