import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { todoContext } from "../context/TodoContext";

const Create = () => {
    const [title, settitle] = useState("");
    
    const {tasks, settasks} = useContext(todoContext);
    
    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            id: nanoid(),
            title: title,
        };
        const updatedTasks = [...tasks, newTask];
        settasks(updatedTasks);
        settitle("");

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <form
            onSubmit={SubmitHandler}
            className="w-[25%] flex justify-center p-3 rounded bg-zinc-600"
        >
            <input
                className="w-full p-2 rounded-tl-sm rounded-bl-sm text-xl "
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <button className=" text-white bg-zinc-500 text-3xl rounded-tr-sm rounded-br-sm">
                <i className="ri-add-fill "></i>
            </button>
        </form>
    );
};

export default Create;
