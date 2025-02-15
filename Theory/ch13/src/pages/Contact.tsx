import { Form, useLoaderData } from "react-router-dom";

interface ContactProps {
  first: string;
  last: string;
  avatar: string;
  twitter?: string;
  notes?: string;
  favorite: boolean;
}

interface FavoriteProps {
  contact: ContactProps;
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={
            contact.avatar || `https://robohash.org/default.png?size=200x200`
          }
          alt="Contact Avatar"
        />
      </div>

      <div className="content">
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p className="twitter">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              @{contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p className="notes">{contact.notes}</p>}

        <div id="action">
          <Form action="edit">
            <button id="edit" type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button id="submit" type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }: FavoriteProps) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        id="favorite"
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}