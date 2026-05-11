import Background from './Background';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen text-[#D2D7D9] h-screen snap-y snap-mandatory overflow-y-scroll ">
            <Background />
            <Navbar />
            <main >
                {children}
            </main>
        </div>
    );
}