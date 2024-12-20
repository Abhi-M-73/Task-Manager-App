import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Search from "./components/Search";

const App = () => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    return (
        <div className=" w-[80%] mx-auto mt-5 p-5 rounded bg-zinc-700">
            <Search />
            <hr className="w-[50%] my-5 border bg-white h-[1px]" />
            {<Create />}
            <hr className="w-[50%] my-5 border bg-white h-[1px]" />
            {<Show />}
        </div>
    );
};

export default App;
