const ListServices = ({ number, text }) => {
  return (
    <section className="bg-white my-4 p-3 rounded-md shadow-md lg:my-8">
      <div className="flex space-x-4 items-center">
        <p className="py-2 px-3 bg-yellow-500 rounded-full font-semibold lg:py-5 lg:px-5 lg:text-3xl">{number}</p>
        <h1 className="font-semibold lg:text-3xl">{text}</h1>
      </div>
    </section>
  );
};

export default ListServices;
