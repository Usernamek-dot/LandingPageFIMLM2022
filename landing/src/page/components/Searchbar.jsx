import { IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export const Searchbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <form>
      <TextField
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Type a language"
        placeholder="type here.."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </form>
  );
};
