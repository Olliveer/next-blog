import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full cursor-pointer"
            src="/svg/logo-white.svg"
            width={50}
            height={50}
            alt="logo justtesting"
          />
        </Link>
        <h1>Justtesting</h1>
      </div>
      <div>
        <Link
          href="/login"
          className="px-5 py-3 md:text-base bg-gray-900 text-brand-500 flex items-center rounded-full text-center"
        >
          Lorem ipsum dolor sit
        </Link>
      </div>
    </header>
  );
}

export default Header;
