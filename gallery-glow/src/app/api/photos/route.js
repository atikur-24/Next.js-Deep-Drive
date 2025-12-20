import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllPhotos();

  const filteredData = data?.map(({ id, title, url }) => ({
    id,
    title,
    url,
  }));

  return NextResponse.json(filteredData);
}
