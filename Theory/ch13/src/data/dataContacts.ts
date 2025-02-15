// Demo data contacts
export const contacts = [
  {
    id: 1,
    first: "John",
    last: "Doe",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "johndoe",
    notes: "Some notes",
    favorite: true,
  },
  {
    id: 2,
    first: "Cuong",
    last: "Dev",
    avatar: "",
    twitter: "cuongdev",
    notes: "Other notes",
    favorite: false,
  },
];

export async function getContacts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 500); // Mô phỏng độ trễ khi lấy dữ liệu
  });
}

export async function getContact(contactId: string) {
  return new Promise((resolver) => {
    setTimeout(() => {
      const contact = contacts.find(item => item.id === Number(contactId));
      resolver(contact || null);
    }, 500);
  })
}