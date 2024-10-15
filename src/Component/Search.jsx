import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  const fetchData = async (searchTerm) => {
    let searchData = {
      search: searchTerm,
    };
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/search`,
        searchData
      );
      setNotes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const filteredNotes = notes.filter(
  //   (note) =>
  //     note?.title?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
  //     note?.description?.toLowerCase().includes(searchTerm?.toLowerCase())
  // );
  
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md max-h-[510px] overflow-y-auto">
      {/* Search bar */}
      <div className="flex items-center border-b-2 border-gray-200 pb-2 mb-4">
        <IoSearchOutline className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search notes"
          className="w-full outline-none text-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <IoAddOutline className="text-blue-500 cursor-pointer ml-2" /> */}
      </div>

      {/* Notes list */}
      <ul className="">
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-200 transition"
          >
            <div>
              <h3 className="font-semibold">{note.name}</h3>
              <p className="text-gray-500">{note.email}</p>
            </div>
            <MdOutlineDeleteOutline
              size={22}
              className="text-gray-400 cursor-pointer hover:text-red-700 transition"
              onClick={() => handleDelete(note.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
