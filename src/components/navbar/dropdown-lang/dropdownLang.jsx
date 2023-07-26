const DropdownLang = ({ id, en }) => {
  return (
    <section className="flex justify-start lg:justify-center">
      <ul className="absolute bg-white top-20 lg:top-8 lg:right-[17rem] text-black  shadow-md">
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white px-8" onClick={id}>
          ID
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white px-8  my-2" onClick={en}>
          ENG
        </li>
      </ul>
    </section>
  );
};

export default DropdownLang;
