import { Link } from "components/Layout/Layout.styled";

const navItems = [
    { href: '/', text: 'Home' },
    { href: '/movies', text: 'Movies' },
]

export const AppBar = () => {
    return (
        <div>
            {navItems.map(({ href, text }) => (
                <Link to={href} key={href}>
                    {text}
                </Link>))
            }
        </div>
    );
};