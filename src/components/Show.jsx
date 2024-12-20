import { useContext } from "react";
import { todoContext } from "../context/TodoContext";

const Show = () => {
    const {tasks, settasks} = useContext(todoContext);
    

    const DeleteHandler = (i) => {
        const copytasks = [...tasks];
        copytasks.splice(i, 1);
        settasks(copytasks);
        localStorage.setItem("tasks", JSON.stringify(copytasks));
    };

    let renderTasks =
        tasks.length > 0 ? (
            tasks.map((t, i) => (
                <li
                    className="w-[25%] flex justify-between px-5 py-3 rounded mb-3 bg-zinc-500"
                    key={t.id}
                >
                    <span>{t.title}</span>

                    <i
                        onClick={() => DeleteHandler(i)}
                        className="ri-close-circle-line hover:text-red-300"
                    ></i>
                </li>
            ))
        ) : (
            <h1 className="w-[50%] text-green-400 text-center">
                No Pending Task
            </h1>
        );

    return <ul className="text-white list-item text-xl">{renderTasks}</ul>;
};

export default Show;
