
export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr className='list' onClick={()=>{ setSelectedContactId(contact.id)}}>  
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
}