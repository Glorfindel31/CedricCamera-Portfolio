import {useState} from 'react';

export default function Hamburger({menuHeight, setMenuHeight}) {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full hamburger-color transition ease transform duration-300`;
  const toggleMenu = () => {
    setMenuHeight(menuHeight === '20rem' ? '0px' : '20rem');
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex flex-col h-10 w-10 rounded justify-center items-center group"
      onClick={toggleMenu}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}
