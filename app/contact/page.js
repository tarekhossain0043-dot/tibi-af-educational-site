import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "যোগাযোগ | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="আমরা পাশে আছি"
      title="যোগাযোগ করুন"
      description="আবেদন, প্রবেশপত্র বা পরীক্ষাসংক্রান্ত প্রশ্ন থাকলে নিচে আপনার বার্তা লিখুন।"
      asideTitle="দ্রুত সহায়তা"
      asideText="সাধারণ প্রশ্নের উত্তর নোটিশ বোর্ডে থাকতে পারে। আগে সাম্প্রতিক ঘোষণাগুলো দেখে নিন।"
      tips={[
        "প্রশ্নটি সংক্ষেপে ও পরিষ্কারভাবে লিখুন",
        "প্রয়োজনে আবেদন নম্বর উল্লেখ করুন",
        "ব্যক্তিগত পাসওয়ার্ড বা PIN দেবেন না",
      ]}
    >
      <PortalForm
        submitLabel="বার্তা তৈরি করুন"
        fields={[
          {
            name: "name",
            label: "আপনার নাম",
            placeholder: "পূর্ণ নাম",
            autoComplete: "name",
          },
          {
            name: "phone",
            label: "মোবাইল নম্বর",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            autoComplete: "tel",
          },
          {
            name: "email",
            label: "ইমেইল (ঐচ্ছিক)",
            type: "email",
            placeholder: "name@example.com",
            required: false,
          },
          {
            name: "topic",
            label: "বিষয়",
            type: "select",
            options: [
              "আবেদন",
              "প্রবেশপত্র",
              "ফলাফল",
              "পেমেন্ট",
              "অন্যান্য",
            ].map((value) => ({ value, label: value })),
          },
          {
            name: "message",
            label: "আপনার বার্তা",
            type: "textarea",
            placeholder: "আপনার প্রশ্ন বা সমস্যাটি লিখুন",
            wide: true,
          },
        ]}
      />
    </PortalPage>
  );
}
