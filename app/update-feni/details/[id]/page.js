import { notFound } from "next/navigation";
import UpdateFeniFrame from "../../UpdateFeniFrame";

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Update Feni | সংবাদ ${id}`,
    description: "Update Feni-এর বিস্তারিত সংবাদ পড়ুন।",
  };
}

export default async function UpdateFeniPostPage({ params }) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) notFound();

  const src =
    id === "10677"
      ? "/update-feni-post-source.html?v=20261016-4"
      : `/api/update-feni/details/${id}`;

  return (
    <UpdateFeniFrame
      src={src}
      title={`Update Feni সংবাদ ${id}`}
    />
  );
}
