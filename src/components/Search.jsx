import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import FoodCard from "./FoodCard";

const Search = () => {
  // const [email, setEmail] = React.useState("");
  // const onChange = ({ target }) => setEmail(target.value);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm) {
        const response = await fetch(
          `http://localhost:5000/searchfood?searchTerm=${searchTerm}`
        ); // Replace with your actual API endpoint
        const data = await response.json();
        setSearchResults(data);
      } else {
        setSearchResults([]); // Clear results if search term is empty
      }
    };

    fetchSearchResults(); // Fetch initial results (optional)
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <div className="relative flex flex-col w-full max-w-[24rem]">
        <form onSubmit={handleSearch}>
          <Input
            type="text" // Change to "text" for food name search
            label="Search Food"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />

          <Button
            type="submit"
            size="sm"
            color={searchTerm ? "gray" : "blue-gray"}
            disabled={!searchTerm}
            className="!absolute flex items-center gap-2 right-1 top-1 rounded"
          >
            <BiSearch />
            Serach
          </Button>
        </form>
      </div>
      <div className="block">
        {searchResults.length > 0 && (
          // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <div>
            {searchResults.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
