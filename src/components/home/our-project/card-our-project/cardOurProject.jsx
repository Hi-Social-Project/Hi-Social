const CardOurProject = ({ img, order, text, title }) => {
  return (
    // <section className="my-4">
    <div className="grid grid-cols-1 p-3 bg-[#012840] w-full items-center justify-items-center  md:grid-cols-2 md:p-0 ">
      <img src={img} alt="shoes" className="h-40 w-64  md:h-auto lg:h-80 md:w-full" />
      <div className={`text-white ${order} py-3 md:px-3 lg:py-5 lg:px-14 space-y-2 lg:space-y-5`}>
        <h1 className="text-xl mt-4 font-medium lg:text-4xl">{title}</h1>
        <p className="text-justify lg:text-lg 2xl:text-xl">{text}</p>
      </div>
    </div>
    // </section>
  );
};

export default CardOurProject;
