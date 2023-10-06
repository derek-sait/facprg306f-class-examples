"use client";

import { useState } from "react";
import contactData from "./contacts-info.json";
import ContactCard from "./contact-card";

export default function ContactList() {
  // map the JSON data to an array
  let contactArray = contactData.map(
    (contact) => ({ ...contact })
    );


  // set up states for sorting and filtering
  let [sortBy, setSortBy] = useState("id");
  let [filter, setFilter] = useState("all");


  // sorting function
  contactArray = contactArray.sort((a, b) => {
  
    if (isNaN(parseInt(a[sortBy]))) {
      // sort alphabetically
      let nameA = a[sortBy].toUpperCase(); // ignore upper and lowercase
      let nameB = b[sortBy].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      // sort numerically
      return a[sortBy] - b[sortBy];
    }
  });

  // filtering function
  if( filter != "all"){
    contactArray = contactArray.filter(
      (contact) => contact.type === filter
      );
  }

  return (
    <div>

      <h2 className="text-4xl text-center p-5">Contact List</h2>

      <div className="flex pl-10 pt-5 pb-5 pr-10 bg-blue-300">

        <div className="flex-1">
          <label>Sort by: </label>
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">ID</option>
            <option value="fname">First Name</option>
            <option value="lname">Last Name</option>
          </select>
        </div>

        <div className="flex-1">
          <label>Filter by: </label>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Contacts</option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </div>

      </div>

      <section className="grid grid-cols-3 gap-5 p-5">
        {contactArray.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </section>

    </div>
  );
}
