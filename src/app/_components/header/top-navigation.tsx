"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  {
    title: "صحفه اصلی",
    href: "/",
  },
  {
    title: "دوره ها",
    href: "/courses",
  },
  {
    title: " مطالب",
    href: "/blog",
  },
];
export const TopNavigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-x-8">
      {menuItems.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li key={item.href}>
            <Link
              className={`dark:hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
