import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  searchInput: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchInput, handleSearchChange }: SearchInputProps) => (
  <OutlinedInput
    placeholder="Search..."
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    }
    onChange={handleSearchChange}
    fullWidth
    sx={{ borderRadius: "10px", backgroundColor: "white" }}
    size="small"
    value={searchInput}
  />
);

export default SearchInput;
