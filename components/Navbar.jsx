'use client';

import styles from '../styles';

const Navbar = () => (
  <div className={`${styles.xPaddings} py-3 relative bg-gradient-to-r from-cyan-500 to-blue-500 fixed`}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}
    >
      <h6 className="font-bold text-[20px] text-[#fff]">
        ActsCloud Inc.
      </h6>
    </div>
  </div>
);

export default Navbar;
