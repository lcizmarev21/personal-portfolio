import { launcherApps} from "./launcherData";

export default function Launcher() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-10">
            {launcherApps.map((app) => (
                <div key={app.id}
                    className="flex flex-col items-center
                     justify-center  bg-gray-800 rounded-lg p-6 hover:bg-gray-700 cursor-pointer transition-all duration-200"
                >
                    <span className="text-4xl mb-2">{app.icon}</span>
                    <span className="text-white font-semibold">{app.name}</span>
                </div>       
            ))}
        </div>
    );
}