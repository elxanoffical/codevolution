import React from "react";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const SignupModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 
                      w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 
                      overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold dark:text-white">
            {t("modal.title")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {t("modal.fields.name")}
            </label>
            <input
              type="text"
              placeholder={t("modal.fields.namePlaceholder")}
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-gray-700 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {t("modal.fields.email")}
            </label>
            <input
              type="email"
              placeholder={t("modal.fields.emailPlaceholder")}
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-gray-700 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {t("modal.fields.password")}
            </label>
            <input
              type="password"
              placeholder={t("modal.fields.passwordPlaceholder")}
              className="w-full px-4 py-2 border rounded-lg
                         dark:bg-gray-700 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-secondary text-white rounded-lg
                       hover:bg-indigo-600 transition text-base font-medium"
          >
            {t("modal.actions.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
