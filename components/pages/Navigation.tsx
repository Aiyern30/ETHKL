const Navigation = () => {
  return (
    <ul className="flex flex-col space-y-4 absolute top-0 right-0 w-48">
      <li className="relative">
        <a href="#" className="text-lg font-medium pr-10 relative group">
          Home
          <span className="absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            -
          </span>
        </a>
      </li>
      <li className="relative">
        <a href="#" className="text-lg font-medium pr-10 relative group">
          Services
          <span className="absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            -
          </span>
        </a>
      </li>
      <li className="relative">
        <a href="#" className="text-lg font-medium pr-10 relative group">
          My Project
          <span className="absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            -
          </span>
        </a>
      </li>
      <li className="relative">
        <a href="#" className="text-lg font-medium pr-10 relative group">
          Contact
          <span className="absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            -
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
