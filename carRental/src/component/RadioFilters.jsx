
function RadioFilter({handleOptionChange, selectedOption}) {

  return (
      <div className="flex flex-wrap px-6 py-4 lg:text-xl gap-4 lg:gap-8 items-center w-full bg-secondaryBg mb-6 rounded-sm shadow">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value="all"
            checked={selectedOption === "all"}
            onChange={handleOptionChange}
            className="mr-2  w-5 h-5 "
          />
          <span>All</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value="car"
            checked={selectedOption === "car"}
            onChange={handleOptionChange}
            className="mr-2  w-5 h-5"
          />
          Cars
        </label>
        <label className=" flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value="estate"
            checked={selectedOption === "estate"}
            onChange={handleOptionChange}
            className="mr-2 w-5 h-5"
          />
          Estates/Auto
        </label>
        <label className=" flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value="mpvs"
            checked={selectedOption === "mpvs"}
            onChange={handleOptionChange}
            className="mr-2 w-5 h-5"
          />
          <span>MPVs</span>
        </label>
      </div>
  );
}

export default RadioFilter;
