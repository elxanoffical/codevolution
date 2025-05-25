import React from "react";
import fbimg from "../assets/fbimg.svg";
import instaimg from "../assets/instaimg.svg";
import twtrimg from "../assets/twtrimg.svg";
import linkdimg from "../assets/linkdimg.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white">
      <div className="my-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-secondary"></div>
            <span className="text-white">{t("footer.brand")}</span>
          </a>
          <p>{t("footer.description")}</p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t("footer.emailPlaceholder")}
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none placeholder:text-white"
            />
            <input
              type="submit"
              value={t("footer.subscribe")}
              className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition"
            />
          </div>
        </div>

        {/* Footer navigation */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">
              {t("footer.platform.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              {t("footer.platform.items", { returnObjects: true }).map((item, i) => (
                <a key={i} href="/" className="block hover:text-gray-300">
                  {item}
                </a>
              ))}
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">
              {t("footer.help.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              {t("footer.help.items", { returnObjects: true }).map((item, i) => (
                <a key={i} href="/" className="block hover:text-gray-300">
                  {item}
                </a>
              ))}
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h3 className="text-2xl font-semibold">
              {t("footer.contact.title")}
            </h3>
            <ul className="flex flex-col gap-3">
              {t("footer.contact.items", { returnObjects: true }).map((item, i) => (
                <a key={i} href="/" className="block hover:text-gray-300">
                  {item}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <h1 className="text-sm dark:text-gray-400">
          {t("footer.copyright")}
        </h1>
        <div className="flex items-center space-x-5">
          <img
            src={fbimg}
            alt={t("footer.social.facebook")}
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={instaimg}
            alt={t("footer.social.instagram")}
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={twtrimg}
            alt={t("footer.social.twitter")}
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
          <img
            src={linkdimg}
            alt={t("footer.social.linkedin")}
            className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
