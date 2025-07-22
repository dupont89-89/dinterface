import { redirect } from "next/navigation";
import LogoutButton from "@/Component/Auth/LogoutButton";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";

export default async function DashboardPage() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-[1fr_auto] justify-between sm:items-stretch items-start gap-10">
        <h1 className="text-[#DAC394] text-left text-xl sm:text-3xl">
          Управление приложением
        </h1>
        <LogoutButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8">
        <Link className="block" href="/dashboard/news">
          <div className="h-[150px] sm:h-[200px] bg-[#1b1b1b] hover:bg-[#363636] rounded-2xl p-2 flex justify-center items-center content-center flex-col">
            <h2 className="font-anticva text-xl text-[#DAC394]">Новости</h2>
            <IoNewspaperOutline className="text-[#DAC394] mt-2" size={35} />
          </div>
        </Link>
        <Link className="block" href="/dashboard/anket">
          <div className="h-[150px] sm:h-[200px] bg-[#1b1b1b] hover:bg-[#363636] rounded-2xl p-2 flex justify-center items-center content-center flex-col">
            <h2 className="font-anticva text-xl text-[#DAC394]">Соискатели</h2>
            <HiOutlineUserGroup className="text-[#DAC394] mt-2" size={35} />
          </div>
        </Link>
      </div>
    </div>
  );
}
