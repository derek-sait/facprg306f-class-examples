import Link from "next/link";
import MyComp from "./my-test-component";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <MyComp />
      <ul>
        <li><Link href="aboutme">About Me</Link></li>
        <li><Link href="contact">Contact</Link></li>
      </ul>
      
      
    </main>
  )
}
