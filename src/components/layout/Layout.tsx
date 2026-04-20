import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen bg-[#0B0D0D] text-[#D2D7D9]">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}