import Link from "next/link";
import MyComp from "../my-test-component";

export default function Page(){
    return (
        <main>
            <h1>About Me</h1>
            <MyComp />
            <p>Hello World!</p>
            <Link href="../">&lt;- Back</Link>
        </main>
    );
}