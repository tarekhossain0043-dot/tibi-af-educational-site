import PortalForm from "@/components/PortalForm";
import PortalPage from "@/components/PortalPage";

export const metadata = { title: "লগইন | টিবিএফ ২০২৬" };

export default function Page() {
  return (
    <PortalPage
      eyebrow="অ্যাডমিন অ্যাক্সেস"
      title="অ্যাডমিন লগইন"
      description="প্রতিষ্ঠানের অনুমোদিত প্রশাসনিক অ্যাকাউন্ট দিয়ে প্রবেশ করুন।"
      asideTitle="নিরাপদ অ্যাক্সেস"
      asideText="লগইন তথ্য কেবল অনুমোদিত অ্যাডমিন ব্যবহারকারীর জন্য। অন্য কারও সঙ্গে পাসওয়ার্ড শেয়ার করবেন না।"
      tips={[
        "শুধু প্রতিষ্ঠানের অনুমোদিত অ্যাকাউন্ট ব্যবহার করুন",
        "পাবলিক ডিভাইসে লগইন তথ্য সংরক্ষণ করবেন না",
        "লগইন সেবা এখনো সার্ভারের সঙ্গে যুক্ত নয়",
      ]}
    >
      <PortalForm
        submitLabel="লগইন"
        fields={[
          {
            name: "username",
            label: "ইউজারনেম",
            placeholder: "আপনার ইউজারনেম",
            autoComplete: "username",
          },
          {
            name: "password",
            label: "পাসওয়ার্ড",
            type: "password",
            placeholder: "আপনার পাসওয়ার্ড",
            autoComplete: "current-password",
          },
        ]}
      />
    </PortalPage>
  );
}
