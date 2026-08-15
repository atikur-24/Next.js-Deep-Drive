import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const lives = [
  {
    id: 1,
    title: "Career In Backend Web Development",
    date: "10 Nov 2022",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Career In Frontend Development",
    date: "10 Nov 2022",
    time: "08:30 PM",
  },
];
const LivesPage = async () => {
  return (
    <div className="flex items-center justify-center max-h-screen h-full">
      <div className="flex flex-col items-center justify-center  gap-4">
        <h4 className="text-2xl font-medium ">Coming Soon...</h4>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* <Link href="/teacher/create">
        <Button>New Course</Button>
      </Link> */}
      <DataTable columns={columns} data={lives} />
    </div>
  );
};

export default LivesPage;
