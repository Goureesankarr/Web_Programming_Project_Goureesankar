import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          alert("✅ Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 p-4">
      <input type="text" name="name" placeholder="Your Name" required className="border p-2 w-full rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="border p-2 w-full rounded" />
      <input type="text" name="title" placeholder="Subject" required className="border p-2 w-full rounded" />
      <textarea name="message" placeholder="Your Message" required className="border p-2 w-full rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}