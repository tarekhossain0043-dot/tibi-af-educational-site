import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "পেমেন্ট যাচাই | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="আবেদন সহায়তা"
      title="পেমেন্ট যাচাই"
      description="পেমেন্ট সম্পন্ন করার পর ট্রানজ্যাকশন আইডি ও আবেদনকারীর মোবাইল নম্বর দিয়ে যাচাই করুন।"
      asideTitle="ট্রানজ্যাকশন আইডি কোথায় পাবেন?"
      asideText="মোবাইল ব্যাংকিং পেমেন্টের সফল বার্তা বা অ্যাপের transaction history-তে আইডিটি থাকে।"
      tips={[
        "সম্পূর্ণ ট্রানজ্যাকশন আইডি লিখুন",
        "যে নম্বর থেকে পেমেন্ট করেছেন সেটি দিন",
        "একই পেমেন্ট বারবার করবেন না",
      ]}
    >
      <PortalForm
        submitLabel="পেমেন্ট যাচাই করুন"
        fields={[
          {
            name: "transactionId",
            label: "ট্রানজ্যাকশন আইডি",
            placeholder: "Transaction ID",
          },
          {
            name: "phone",
            label: "পেমেন্টের মোবাইল নম্বর",
            type: "tel",
            placeholder: "01XXXXXXXXX",
            autoComplete: "tel",
          },
        ]}
      />
    </PortalPage>
  );
}
