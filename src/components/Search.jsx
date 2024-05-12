import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Search"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute flex items-center gap-2 right-1 top-1 rounded"
      >
        <BiSearch />
        Serach
      </Button>
    </div>
  );
};

export default Search;
