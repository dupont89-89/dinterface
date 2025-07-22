"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-[#e1bc6f] text-[#454141] inline-block rounded-[30px] px-5 py-2 sm:px-10 sm:py-4 sm:text-base text-sm hover:bg-[#cba659]"
    >
      Выйти
    </button>
  );
}
