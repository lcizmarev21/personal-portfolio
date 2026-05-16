import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const options = {
            root: null,
            rootMargin: "-45% 0px -45% 0px",
            threshold: 0,
        };

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            }, options);

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [ids]);

    return active;
}