const ContactUs = ({ icons, text }) => {
  return (
    <section className="flex mt-2 md:mt-3">
      <h1 className="text-2xl hidden md:block">{icons}</h1>
      <p className="ms-1 text-xs md:text-sm">{text}</p>
    </section>
  );
};

export default ContactUs;
