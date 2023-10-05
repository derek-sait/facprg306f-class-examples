
export default function ContactCard({contact}){
    return(
        <div className="rounded p-5 bg-blue-500">
            <h3 className="text-2xl">{contact.fname} {contact.lname}</h3>
            <p><b>ID#:</b> {contact.id}</p>
            <p><b>Email:</b> {contact.email}</p>
            <p><b>Phone</b> {contact.phone}</p>
            <p><b>Contact Type:</b> {contact.type}</p>
        </div>
    );
}
