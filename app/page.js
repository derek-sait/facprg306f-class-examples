"use client";

import Link from "next/link";
import MyComp from "./my-test-component";
import CounterDisplay from "./_util/counter-display";
import { useState } from "react";

export default function Home() {

  const linkStyles = "underline text-cyan-600 hover:text-cyan-300";

  const [counter, setCounter] = useState(0);

  const incrementCounter = (currentCount) => {
    setCounter(currentCount + 1);
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl">Hello World!</h1>
      <MyComp />
      <h2 className="text-2xl mt-10">Project Links</h2>
      <ul>
        <li><Link className={linkStyles} href="about">About</Link></li>
        <li><Link className={linkStyles} href="contact">Contact v1.0</Link></li>
        <li><Link className={linkStyles} href="registration">Registration</Link></li>
        <li><Link className={linkStyles} href="contact2">Contact v2.0</Link></li>
        <li><Link className={linkStyles} href="museum">Art Gallery</Link></li>

      </ul>
      
      <CounterDisplay currentCount={counter} incrementCountFunction={incrementCounter} />

    </main>
  )
}
