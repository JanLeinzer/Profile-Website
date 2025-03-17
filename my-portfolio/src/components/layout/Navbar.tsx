import { Button } from "../ui/button";
import "./styles/Navbar.css"
export function ButtonGhost() {
    return (
        <div className="navbar">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Experience</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Contact</Button>
        </div>
    );
}

export default ButtonGhost;