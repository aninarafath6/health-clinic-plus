export default {
  header: "h-auto m-5 flex items-center justify-between  lg:justify-between",
  logoImage: "w-auto h-8 sm:h-10",
  menuIcon: `text-white h-8  absolute right-0 top-0 m-5 cursor-pointer z-50 lg:hidden`,
  navLinks: `bg-primary absolute top-0 left-0 bottom-0 right-0 lg:visible text-white text-lg
         md:visible flex items-center justify-evenly flex-col overflow-hidden select-none lg:bg-transparent
       lg:text-primary lg:flex-row lg:relative lg:space-x-10
  `,
  navLinkType1:
    "cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceLeft ",
  navLinkType2:
    "cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceRight ",
  userIcon:
    " text-white transform lg:text-primary lg:relative h-8 absolute left-0 top-0 m-5 cursor-pointer z-50  cursor-pointer transform transition-all duration-100 ease-in-out hover:scale-110 animate-entranceRight transition-all duration-100 ease-in-out hover:scale-110 animate-entranceLeft lg:opacity-100",
};
