import Link from "next/link";

const Layout = ({children}) => {
    return (
        <>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link href="/">Home Page</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/weather">Weather</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Layout