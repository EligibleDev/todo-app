import Counters from "../Counters/Counters";

const Header = () => {
    return (
        <header className="py-4 border-b border-b-purple">
            <nav className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center gap-4 px-8 xl:px-0">
                <div className="flex gap-2 order-2 lg:order-1">
                    <div className="flex gap-1 items-center">
                        <span className="w-5 h-5 bg-green"></span>
                        <p> : Low</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="w-5 h-5 bg-yellow"></span>
                        <p> : Medium</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <span className="w-5 h-5 bg-red"></span>
                        <p> : High</p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 text-4xl font-semibold">
                    Todo App by{" "}
                    <b className="text-purple">
                        <a href="https://mikail.web.app">Mikail</a>
                    </b>
                </div>

                <Counters />
            </nav>
        </header>
    );
};

export default Header;
