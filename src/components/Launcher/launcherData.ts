export interface AppItem {
    id: string;
    name: string;
    icon: string;
}

export const launcerApps: AppItem[] = [
    { id: "about", name: "About Me", icon: "👤"},
    { id: "skills", name: "Skills", icon: "💻"},
    { id: "projects", name: "Projects", icon: "🗂️"},
    { id: "contact", name: "Contact", icon: "✉️"},
];