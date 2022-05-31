import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-main-color text-gray-100  px-24 pt-16 pb-8">
      <div className=" justify-between mb-24 flex flex-col md:flex-row">
        <div className="inline-block pb-24 md-pb-0 text-center md:text-left">
          <span className="text-3xl">WhereMap</span>
        </div>
        <div className="inline-block text-center md:text-left">
          <nav className=" inline-block ">
            <ul className="flex flex-col md:flex-row gap-6">
              <li className="hover:text-gray-300">
                <a href="/">利用規約</a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/">プライバシーポリシー</a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/">お問い合わせ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="text-center md:text-right">
        <small>copyright all received</small>
      </div>
    </footer>
  );
};
