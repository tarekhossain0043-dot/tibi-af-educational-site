import { notices } from "@/lib/data";
import NoticeBoard from "@/components/NoticeBoard";

export const metadata = { title: "নোটিশ | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <div className="notice-board-page">
      <header className="notice-page-heading">
        <div>
          <span className="eyebrow">সর্বশেষ ঘোষণা</span>
          <h1>নোটিশ বোর্ড</h1>
          <p>
            বৃত্তি পরীক্ষা ও ফাউন্ডেশনের কার্যক্রমের নির্ভরযোগ্য আপডেট এখানে
            দেখুন।
          </p>
        </div>
        <div className="notice-count">
          <strong>{notices.length.toLocaleString("bn-BD")}</strong>
          <span>টি প্রকাশিত নোটিশ</span>
        </div>
      </header>
      <NoticeBoard notices={notices} />
    </div>
  );
}
