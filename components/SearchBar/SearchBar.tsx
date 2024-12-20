// import React from 'react';

// interface SearchBarProps {
//   onSearch: () => void;
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery, setSearchQuery }) => {


//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     onSearch();
//   };

//   return (
//     <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleInputChange}
//         placeholder="Search products..."
//         className="flex-1 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
//       />
//       <button
//         onClick={handleSearch}
//         className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

import React from 'react';

interface SearchBarProps {
  onSearch: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, searchQuery, setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch();
  };

  return (
    <div className="flex items-center rounded-lg p-2 shadow-sm">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search products..."
        className="flex-1 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-red-300 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
