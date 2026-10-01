import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "ফলাফল | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="বৃত্তি পরীক্ষা ২০২৬"
      title="পরীক্ষার ফলাফল"
      description="আপনার পরীক্ষার ফলাফল খুঁজতে আবেদন/রোল নম্বর ও নিবন্ধিত মোবাইল নম্বর দিন।"
      asideTitle="ফলাফল খুঁজে পাচ্ছেন না?"
      asideText="তথ্য দেওয়ার সময় আবেদনপত্রের সঙ্গে মিলিয়ে লিখুন। ফলাফল প্রকাশের সময় নোটিশ বোর্ডে জানানো হবে।"
      tips={[
        "রোল নম্বরের অক্ষর ও সংখ্যা ঠিক রাখুন",
        "আবেদনে দেওয়া মোবাইল নম্বর ব্যবহার করুন",
        "প্রকাশের তারিখ জানতে নোটিশ দেখুন",
      ]}
    >
      <PortalForm
        submitLabel="ফলাফল খুঁজুন"
        fields={[
          {
            name: "roll",
            label: "আবেদন / রোল নম্বর",
            placeholder: "আপনার রোল নম্বর",
          },
          {
            name: "phone",
            label: "মোবাইল নম্বর",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            autoComplete: "tel",
          },
        ]}
      />
    </PortalPage>
  );
}
