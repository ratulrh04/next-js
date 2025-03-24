'use client'
import { usePathname, useRouter } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    const navigation = useRouter();

    // Function for handling navigation
    const navigationFunc = (name) => {
        navigation.push(name);
    };

    return (
        <div>
            {pathName !== '/about/aboutStudent' ? (
                <ul>
                    <li>
                        <button onClick={() => navigationFunc('/about')}>
                            <h3>Main About Page</h3>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigationFunc('/about/aboutCollage')}>
                            <h3>About College Page</h3>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigationFunc('/about/aboutStudent')}>
                            <h3>About Student Page</h3>
                        </button>
                    </li>
                </ul>
            ) : null}

            {children}
        </div>
    );
}
