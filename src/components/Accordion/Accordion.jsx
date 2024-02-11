import Button from "../Button/Button";

const Accordion = ({ task }) => {
    return (
        <section key={task?.id} class="accordion">
            <div
                class={`tab ${
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
                <label for={task?.id} class="tab__label font-medium">
                    {task?.title}
                </label>
                <div class="tab__content space-y-4">
                    <p>{task?.description}</p>

                    <div className="flex gap-1">
                        <Button>Mark as Complete</Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
