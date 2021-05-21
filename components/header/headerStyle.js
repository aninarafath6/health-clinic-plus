export default {
  header: "h-auto m-5 flex items-center justify-between  lg:justify-between",
  logoImage: "w-auto h-8 sm:h-10 transition-all ease-in-out duration-200 z-20",
  menuIcon: `text-white h-8  absolute right-0 top-0 m-5 cursor-pointer z-50 xl:hidden`,
  navLinks: `hidden bg-primary absolute top-0 left-0 bottom-0 right-0 lg:visible text-white text-lg
         md:visible flex items-center justify-evenly flex-col overflow-hidden select-none lg:bg-transparent
       lg:text-white lg:flex-row lg:relative lg:space-x-10 z-30
  `,
  navLinkType1:
    "cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceLeft ",
  navLinkType2:
    "cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceRight ",
  userIcon:
    " transition-all ease-in-out duration-200 text-white transform  lg:relative h-8 absolute left-0 top-0 m-5 cursor-pointer z-30  cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceRight transition-all duration-100 ease-in-out hover:scale-110 animate-entranceRight lg:opacity-100 lg:text-white",
};
