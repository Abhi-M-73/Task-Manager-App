import { useContext, useState } from "react";
import { todoContext } from "../context/TodoContext";

const Search = () => {
    const {tasks} = useContext(todoContext);
    
    const [filtered, setfiltered] = useState([]);

    const SearchHandler = (e) => {
        e.preventDefault();
        const query = e.target.value;
        const filteredTasks = tasks.filter((t, i) =>
            t.title.toLowerCase().includes(query.toLowerCase())
        );
        if (query.trim().length) {
            setfiltered(filteredTasks);
        } else {
            setfiltered([]);
        }
    };

    let filteredtasks = filtered.map((t, i) => (
        <li className=" list-item px-5 py-3  border-b" key={t.id}>
            {t.title}
        </li>
    ));

    return (
        <>
            <form className="w-[25%] flex justify-center p-3 rounded bg-zinc-600">
                <input
                    className="w-full p-2 rounded-tl-sm rounded-bl-sm text-xl "
                    type="text"
                    placeholder="Search"
                    onChange={SearchHandler}
                />
                <button className=" text-white bg-zinc-500 text-3xl rounded-tr-sm rounded-br-sm">
                    <i className="ri-search-line"></i>
                </button>
            </form>
            <ul className=" list-none w-[25%] rounded  bg-zinc-400 text-white">
                {filteredtasks}
            </ul>
        </>
    );
};

export default Search;
