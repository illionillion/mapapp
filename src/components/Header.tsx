import React from "react";

export const Header = (): JSX.Element => {

  return (
    <header className="bg-main-color">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a href="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              where-map
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
