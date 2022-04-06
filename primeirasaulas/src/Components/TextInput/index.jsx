import './style.css'

export default function SearchInput({ handleChange, searchValue }) {
    return (
        <input
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder='Type your search'
        />
    );
}