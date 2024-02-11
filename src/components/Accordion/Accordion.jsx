"use client";

import { useContext } from "react";
import Button from "../Button/Button";
import { UtilsContext } from "@/providers/UtilsProvider/UtilsProvider";

const Accordion = ({ task }) => {
    const { markAsComplete } = useContext(UtilsContext);

    return (
        <section key={task?.id} className="accordion">
            <div
                className={`tab ${
                    task?.priority === "low"
                        ? "bg-green"
                        : task?.priority === "medium"
                        ? "bg-yellow"
                        : task?.priority === "high"
                        ? "bg-red"
                        : ""
                }`}
            >
                <input type="checkbox" name="accordion-1" id={task?.id} />
                <label htmlFor={task?.id} className="tab__label font-medium">
                    {task?.title}
                </label>
                <div className="tab__content space-y-4">
                    <p>{task?.description}</p>

                    <div className="flex gap-1">
                        <Button onClick={() => markAsComplete(task?.id)}>
                            Mark as Complete
                        </Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
