import { useEffect, useState } from "react";

export function useActiveSection(sections: string[]) {
  const [active, setActive] = useState<string>(sections[0]);

  useEffect(() => {
    const elements = sections.map((id) =>
      document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return active;
}