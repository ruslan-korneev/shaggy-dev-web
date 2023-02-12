export default function Contacts() {
  const contacts = [
    { index: 0, name: 'Phone', value: '+381631256805' },
    { index: 1, name: 'Email', value: 'ruslan@shaggy.dev' },
    { index: 2, name: 'Telegram', value: 't.me/shaggy_axel' },
    { index: 3, name: 'Github', value: 'github.com/shaggy-axel' },
    { index: 4, name: 'Instagram', value: 'instagram.com/shaggy.dev' }
  ];

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.index}>
          {contact.name}:{contact.value}
        </div>
      ))}
    </div>
  );
}
