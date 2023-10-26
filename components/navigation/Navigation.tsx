import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
  return (
    <div className="border-b sticky top-0 z-20 bg-white left-0 right-0 bg-opacity-50 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex justify-between py-5 items-center ">
          <Link href="/" className="text-lg font-bold">Explorer</Link>
          <nav className="">
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
