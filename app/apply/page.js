import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "আবেদন | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="বৃত্তি পরীক্ষা ২০২৬"
      title="শিক্ষার্থী আবেদন"
      description="পরীক্ষায় অংশ নিতে শিক্ষার্থীর তথ্য পূরণ করুন। আবেদন জমা দেওয়ার আগে তথ্যগুলো ভালোভাবে মিলিয়ে নিন।"
      asideTitle="আবেদনের আগে"
      asideText="সঠিক তথ্য দিলে পরবর্তী ধাপে প্রবেশপত্র ও ফলাফল খুঁজে পেতে সুবিধা হবে।"
      tips={[
        "শিক্ষার্থীর নাম স্কুলের রেকর্ড অনুযায়ী লিখুন",
        "সচল অভিভাবকের মোবাইল নম্বর দিন",
        "সাবমিটের আগে সব তথ্য যাচাই করুন",
      ]}
    >
      <PortalForm
        submitLabel="আবেদন চালিয়ে যান"
        fields={[
          {
            name: "studentName",
            label: "শিক্ষার্থীর পূর্ণ নাম",
            placeholder: "বাংলায় নাম লিখুন",
            autoComplete: "name",
          },
          {
            name: "guardianName",
            label: "অভিভাবকের নাম",
            placeholder: "অভিভাবকের পূর্ণ নাম",
          },
          {
            name: "phone",
            label: "অভিভাবকের মোবাইল",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            autoComplete: "tel",
          },
          {
            name: "school",
            label: "শিক্ষাপ্রতিষ্ঠানের নাম",
            placeholder: "স্কুলের নাম",
            wide: true,
          },
          {
            name: "class",
            label: "বর্তমান শ্রেণি",
            type: "select",
            options: ["৫ম", "৬ষ্ঠ", "৭ম", "৮ম", "৯ম", "১০ম"].map((value) => ({
              value,
              label: value,
            })),
          },
          { name: "district", label: "জেলা", placeholder: "জেলার নাম" },
          {
            name: "consent",
            label: "প্রদত্ত তথ্য সঠিক বলে নিশ্চিত করছি",
            type: "checkbox",
            wide: true,
          },
        ]}
      />
    </PortalPage>
  );
}
