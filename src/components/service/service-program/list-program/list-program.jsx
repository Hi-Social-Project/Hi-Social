const ListProgram = ({ t }) => {
  return (
    <section className="border-2 border-black rounded w-40 h-12 md:w-48 md:h-14 lg:w-80 lg:h-20 flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
      <p className="font-medium text-center text-xs md:text-sm lg:text-2xl">{t}</p>
    </section>
  );
};

export default ListProgram;
