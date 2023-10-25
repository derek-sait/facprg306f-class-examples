import Link from "next/link";
import MyComp from "../my-test-component";

export default function Page(){

    return (
        <main>
            <h1 className="text-xl">About</h1>
            <p>This is an example project for React!</p>
            <MyComp />
            <Link href="../" className="text-cyan-600 hover:text-cyan-300">&lt;- Back</Link>
        </main>
    );
}
