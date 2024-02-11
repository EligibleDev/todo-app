import Link from "next/link";

const Header = () => {
    return (
        <header className="text-center text-4xl font-bold py-4 border-b border-b-gray-500">
            <Link href="/">Todo App</Link>
        </header>
    );
};

export default Header;
