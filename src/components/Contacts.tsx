export default function Contacts() {
    const contacts = [
        {name: "Phone", value: "+381631256805"},
        {name: "Email", value: "ruslan@shaggy.dev"},
        {name: "Telegram", value: "t.me/shaggy_axel"},
        {name: "Github", value: "github.com/shaggy-axel"},
        {name: "Instagram", value: "instagram.com/shaggy.dev"},
    ]

    return (
        <div>
            {contacts.map((contact) =>
                <div>
                    {contact.name}: {contact.value}
                </div>
            )}
        </div>
    )
}