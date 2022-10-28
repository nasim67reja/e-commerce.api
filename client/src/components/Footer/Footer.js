import React from "react";
import { Link } from "react-router-dom";

const footer = [
  {
    tittle: "Careocity Service",
    services: [
      "Grocery Pickup & Delivery",
      "MoneyCenter",
      "CareoCity Credit Card",
      "CareoCity Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "Careocity Service",
    services: [
      "Grocery Pickup & Delivery",
      "MoneyCenter",
      "Afforbable Credit Card",
      "Afforbable Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "Careocity Service",
    services: [
      "Grocery Pickup & Delivery",
      "MoneyCenter",
      "CareoCity Credit Card",
      "CareoCity Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
  {
    tittle: "Careocity Service",
    services: [
      "Grocery Pickup & Delivery",
      "MoneyCenter",
      "CareoCity Credit Card",
      "CareoCity Pay",
      "Weekly Ad",
      "Other Services",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div
        className="cursor-pointer bg-tertiary py-4 text-center"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <button>BACK TO TOP</button>
      </div>
      <div className="border-b border-tertiary bg-secondary">
        <div className="mx-auto max-w-[105rem] px-3">
          <div className="grid grid-cols-1  gap-4 px-4  py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {footer.map((col, i) => (
              <div key={i}>
                <h3 className="mb-10 text-xl font-medium">{col.tittle}</h3>
                <ul className="flex flex-col gap-2">
                  {col.services.map((link, i) => (
                    <li key={i}>
                      <Link
                        to="/"
                        className="text-sm transition-all hover:text-blue-600"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-10 text-lg font-medium">Newsletter</h3>
              <p className="mb-6 text-sm">
                Sign up to our newsletter and get exclusive deals you wont find
                anywhere else straight to your inbox!
              </p>
              <form className="bord">
                <input
                  type="text"
                  className="mb-4 w-full rounded p-2  text-sm text-primary focus:outline-4 focus:outline-outline"
                  placeholder="Your email "
                />
                <button type="submit" className="rounded bg-blue-600 px-4 py-1">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 bg-secondary py-12">
        <div>
          <h3 className="text-lg font-medium">Careocity</h3>
          <span className="text-sm opacity-70">Quality Fun Shopping</span>
        </div>
        <div className="border border-tertiary px-8 py-2 text-sm">
          hi I am Nasim
        </div>
      </div>
      <div className="mx-auto max-w-[105rem] px-3">
        <div className="flex items-center justify-between py-4">
          <div>nasimreja67@gmail.com</div>
          <div>Copyright © 2022 CareoCity</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
