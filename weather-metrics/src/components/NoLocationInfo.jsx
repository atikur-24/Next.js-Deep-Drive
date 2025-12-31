import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <p>
        No LocationIn found at <span className="text-blue-500">{location}</span>
      </p>

      <div className="flex items-center justify-center h-full">
        <Link href={`/`} className="bg-blue-500 text-white hover:bg-blue-600 items-center justify-center px-4 h-10 flex w-fit rounded-md text-center">
          Back to Home
        </Link>
      </div>
    </Card>
  );
};

export default NoLocationInfo;
