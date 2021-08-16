import Link from 'next/link'

function HomePage() {
    return (
        <>
            <nav>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </nav>
            <div>Welcome Bozo</div>
        </>
    )
}


export default HomePage