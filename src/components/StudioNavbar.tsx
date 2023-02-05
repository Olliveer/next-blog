import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href={"/"} className="text-brand-500 flex items-center">
          <ArrowUturnLeftIcon className="h-5 w-5 mr-2 text-brand-500" />
          Go to Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-brand-500">
          <h1 className="font-bold text-white">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          </h1>
          <Link href={"/"} className="text-brand-500 font-bold ml-2">
            wwww.loremipsumdolo.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
