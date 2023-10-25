import Link from "next/link";

export default function MyComp(){
    return (
        <div>
            <h2>Custom Component!</h2>
            <Link className="underline text-cyan-600 hover:text-cyan-300" href="https://www.sait.ca">SAIT Website</Link>
        </div>
    );
}