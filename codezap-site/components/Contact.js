export default function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form action="https://formspree.io/f/mqaznykv" method="POST" className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
        <input type="text" name="name" placeholder="Your Name" className="w-full mb-4 p-3 border rounded" required/>
        <input type="email" name="_replyto" placeholder="Your Email" className="w-full mb-4 p-3 border rounded" required/>
        <textarea name="message" placeholder="Your Message" className="w-full mb-4 p-3 border rounded" rows="4" required></textarea>
        <input type="hidden" name="_subject" value="New Contact from CodeZap.co.za" />
        <input type="hidden" name="_cc" value="orders@codezap.co.za" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Send Message</button>
      </form>
    </section>
  )
}
