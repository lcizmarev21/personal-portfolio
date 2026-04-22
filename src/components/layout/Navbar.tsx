export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-end px-8 py-4 bg-[#0B0D0D] z-50">
            <ul className="flex flex-row gap-8">
                <li>
                    Home
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Skills
                </li>
            </ul>
        </nav>
    );
}