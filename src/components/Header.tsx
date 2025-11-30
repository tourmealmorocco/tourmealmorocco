import logo from "@/assets/logo.png";
const Header = () => {
  return <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6">
      <div className="container-custom flex justify-center">
        <img src={logo} alt="Meknès Premium Dining Logo" className="h-76 md:h-[330px] lg:h-[284px] w-auto object-cover shadow-md" />
      </div>
    </header>;
};
export default Header;