import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-scroll';
import SignupModal from './signupModal';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => !!localStorage.getItem('dark'));
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    if (darkMode) {
      localStorage.setItem('dark', 'true');
    } else {
      localStorage.removeItem('dark');
    }
  }, [darkMode]);

  const darkModeToggle = () => setDarkMode((m) => !m);
  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const navItems = [
    { key: 'nav.home', path: 'home' },
    { key: 'nav.about', path: 'about' },
    { key: 'nav.services', path: 'services' },
    { key: 'nav.contact', path: 'contact' },
  ];

  return (
    <>
      <header className="bg-white md:px-14 dark:bg-gray-900 dark:text-white p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0 border-b border-gray-100 dark:border-gray-600">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="#"
              className="text-2xl font-semibold flex items-center space-x-2 text-primary dark:text-white"
            >
              <span>{t('brand')}</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="block hover:text-gray-400 cursor-pointer"
                >
                  {t(key)}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden xl:flex items-center">
            <button
              onClick={darkModeToggle}
              className="bg-gray-700 h-8 px-4 flex items-center space-x-2 rounded-full transition-colors hover:bg-gray-500 text-white"
            >
              <MdOutlineDarkMode className="w-5 h-5 dark:text-black" />
            </button>

            <div className="flex items-center space-x-2">
              <GrLanguage />
              <select
                value={i18n.language}
                onChange={changeLanguage}
                className="bg-transparent cursor-pointer dark:bg-gray-800 text-base outline-none"
              >
                <option value="az">AZ</option>
                <option value="en">EN</option>
              </select>
            </div>

            <button
              onClick={openModal}
              className="bg-secondary py-2 px-4 rounded transition-all duration-300 hover:bg-indigo-600 hover:text-white"
            >
              {t('signup')}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <FaXmark className="w-6 h-6 text-primary dark:text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-primary dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          menuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
        }`}
      >
        {navItems.map(({ key, path }) => (
          <Link
            key={key}
            to={path}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            className="block hover:text-gray-400 text-white cursor-pointer"
          >
            {t(key)}
          </Link>
        ))}
        <button
          onClick={openModal}
          className="w-full py-2 mt-4 bg-primary text-white rounded"
        >
          {t('signup')}
        </button>
      </div>

      <SignupModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
