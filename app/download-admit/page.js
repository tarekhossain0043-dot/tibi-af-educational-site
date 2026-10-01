import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "প্রবেশপত্র ডাউনলোড | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="পরীক্ষার্থীদের জন্য"
      title="প্রবেশপত্র ডাউনলোড"
      description="নিবন্ধিত পরীক্ষার্থীর তথ্য দিয়ে প্রবেশপত্র খোঁজার ফর্মটি পূরণ করুন।"
      asideTitle="প্রবেশপত্র সম্পর্কে"
      asideText="প্রবেশপত্রে পরীক্ষার রোল, কেন্দ্র ও সময়সূচির তথ্য থাকে। পরীক্ষার দিন এটি সঙ্গে রাখুন।"
      tips={[
        "আবেদনের সময় ব্যবহৃত মোবাইল নম্বর দিন",
        "রোল নম্বরটি আবেদন কপি থেকে মিলিয়ে নিন",
        "সমস্যা হলে নোটিশ বোর্ডে আপডেট দেখুন",
      ]}
    >
      <PortalForm
        submitLabel="প্রবেশপত্র খুঁজুন"
        fields={[
          {
            name: "roll",
            label: "আবেদন / রোল নম্বর",
            placeholder: "যেমন: TBF-2026-0001",
          },
          {
            name: "phone",
            label: "অভিভাবকের মোবাইল নম্বর",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            autoComplete: "tel",
          },
        ]}
      />
    </PortalPage>
  );
}
