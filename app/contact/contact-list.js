import Contact from "./contact"

export default function ContactList(){
    var contact1 = {
        fname: "Jerry",
        lname: "Atrick",
        email: "ja123@mail.ca",
        phone: "123-555-6789"
    }
    var contact2 = {
        fname: "Matilda",
        lname: "Keybroke",
        email: "matilda@mail.ca",
        phone: "123-555-9876"
    }
    var contact3 = {
        fname: "Alison",
        lname: "Vanderland",
        email: "rabbitz@mail.ca",
        phone: "321-555-6789"
    }
    var contact4 = {
        fname: "William",
        lname: "Maizear",
        email: "billyOC@mail.ca",
        phone: "321-555-9876"
    }
    var contact5 = {
        fname: "Pamela",
        lname: "Kaikes",
        email: "pamk@mail.ca",
        phone: "123-555-6789"
    }

    return(
        <div>
            <Contact fname={contact1.fname} lname={contact1.lname} email={contact1.email} phone={contact1.phone} />
            <Contact fname={contact2.fname} lname={contact2.lname} email={contact2.email} phone={contact2.phone} />
            <Contact fname={contact3.fname} lname={contact3.lname} email={contact3.email} phone={contact3.phone} />
            <Contact fname={contact4.fname} lname={contact4.lname} email={contact4.email} phone={contact4.phone} />
            <Contact fname={contact5.fname} lname={contact5.lname} email={contact5.email} phone={contact5.phone} />
        </div>
    )
}