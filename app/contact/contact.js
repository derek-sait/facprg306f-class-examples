import Link from "next/link";

export default function Contact({fname, lname, email, phone}){
    return (
        <div>
            <h3>{fname} {lname}</h3>
            <p>
                Email: <Link href={email}>{email}</Link>
            </p>
            <p>
                Phone: {phone}
            </p>
        </div>
    );
}