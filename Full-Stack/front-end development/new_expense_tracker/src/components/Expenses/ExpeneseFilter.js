const ExpeneseFilter = (props) => {
  const dropdownChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <div className="expense-list-filter">
        <select value={props.selected} onChange={dropdownChange}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </>
  );
};

export default ExpeneseFilter;
