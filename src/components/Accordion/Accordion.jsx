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
                <label for={task?.id} class="tab__label">
                    {task?.title}
                </label>
                <div class="tab__content">
                    <p>{task?.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
