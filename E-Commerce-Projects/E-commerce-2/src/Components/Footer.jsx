import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[var(--dark-2)] text-[var(--light-3)]">
        <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-6">
          <div>
            <h2 className="text-[18px] md:text-[20px] text-[var(--light-2)] mb-3">
              Shopping <span className="text-[var(--main)]">Mart</span>
            </h2>
            <p>@ 2024 shovon software Pvt. Ltd</p>
          </div>

          <div>
            <h2 className="text-[18px] md:text-[20px] text-[var(--light-2)] mb-3">
              Company
            </h2>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              About
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Careers
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Terms
            </p>
          </div>

          <div>
            <h2 className="text-[18px] md:text-[20px] text-[var(--light-2)] mb-3">
              Help & Support
            </h2>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Company
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Partner with us
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Call us
            </p>
          </div>

          <div>
            <h2 className="text-[18px] md:text-[20px] text-[var(--light-2)] mb-3">
              We delever to :
            </h2>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">USA</p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              Canada
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              China
            </p>
            <p className="mb-1 cursor-pointer hover:text-[var(--main)]">
              India
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--dark-1)] flex justify-center items-center py-2 text-[var(--light-2)]">
        <p className="flex justify-center items-center">
          <span className="text-2xl mr-2">&#169;</span> All right reserved by{" "}
          <span className="text-[var(--main)] ml-2 cursor-default">
            SHOPPING MART
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
