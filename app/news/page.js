import UpdateFeniFrame from "../update-feni/UpdateFeniFrame";

export const metadata = {
  title: "Update Feni | সর্বশেষ সংবাদ",
  description:
    "Update Feni থেকে সর্বশেষ সংবাদ, ব্রেকিং নিউজ, রাজনীতি, অর্থনীতি, খেলা ও বিনোদনের খবর পড়ুন।",
};

export default function NewsPage() {
  return (
    <UpdateFeniFrame
      postRouteBase="/news"
      title="Update Feni সংবাদ পোর্টাল"
    />
  );
}
