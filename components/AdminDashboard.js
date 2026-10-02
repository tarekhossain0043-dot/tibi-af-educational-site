"use client";

import { useEffect, useState } from "react";
import { useSiteContentState } from "@/components/SiteContentProvider";
import { getSupabaseClient } from "@/lib/supabase";

const sections = [
  ["overview", "সারসংক্ষেপ", "fa-chart-pie"],
  ["home", "হোমপেজ", "fa-house"],
  ["notices", "নোটিশ", "fa-bullhorn"],
  ["dates", "সময়সূচী", "fa-calendar-days"],
  ["media", "ছবি ও গ্যালারি", "fa-images"],
  ["team", "পরিচালনা পর্ষদ", "fa-users"],
  ["navigation", "নেভিগেশন", "fa-bars"],
  ["portals", "পোর্টাল পেজ", "fa-file-lines"],
  ["general", "সাইট সেটিংস", "fa-gear"],
];

const portalLabels = {
  apply: "আবেদন",
  admit: "প্রবেশপত্র",
  result: "ফলাফল",
  payment: "পেমেন্ট যাচাই",
  contact: "যোগাযোগ",
  login: "লগইন",
};

const inputClass =
  "mt-1.5 min-h-10 w-full rounded border border-[#d8d7cf] bg-white px-3 py-2 text-sm font-normal text-[#252820] outline-none transition focus:border-[#9a3e32] focus:ring-2 focus:ring-[#9a3e32]/10";

function TextField({
  label,
  value,
  onChange,
  multiline = false,
  type = "text",
}) {
  const common = {
    className: inputClass,
    value: value ?? "",
    onChange: (event) => onChange(event.target.value),
  };
  return (
    <label className="block min-w-0 text-sm font-semibold text-[#45483f]">
      {label}
      {multiline ? (
        <textarea {...common} rows={3} />
      ) : (
        <input {...common} type={type} />
      )}
    </label>
  );
}

function SectionHeading({ title, description, action }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-[#e1dfd5] pb-4">
      <div>
        <h2 className="font-serif text-xl font-bold text-[#22251f]">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-[#70736b]">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

function SmallButton({ children, onClick, tone = "plain" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-9 items-center gap-2 rounded border px-3 text-sm font-semibold transition ${tone === "danger" ? "border-[#e4c9c5] text-[#963d32] hover:bg-[#fff4f1]" : "border-[#deddd4] bg-white text-[#343830] hover:bg-[#f6f5ef]"}`}
    >
      {children}
    </button>
  );
}

export default function AdminDashboard() {
  const { content, setContent } = useSiteContentState();
  const supabase = getSupabaseClient();
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedPortal, setSelectedPortal] = useState("apply");
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!supabase) return undefined;
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setSession(data.session);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setMessage("");
    });
    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, [supabase]);

  const setValue = (key, value) => {
    setContent((current) => ({ ...current, [key]: value }));
  };

  const setCopy = (key, value) => {
    setContent((current) => ({
      ...current,
      siteCopy: { ...current.siteCopy, [key]: value },
    }));
  };

  const updateItem = (collection, index, field, value) => {
    setContent((current) => ({
      ...current,
      [collection]: current[collection].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const setPortal = (key, value) => {
    setContent((current) => ({
      ...current,
      portalPages: {
        ...current.portalPages,
        [selectedPortal]: {
          ...current.portalPages[selectedPortal],
          [key]: value,
        },
      },
    }));
  };

  const updatePortalField = (index, key, value) => {
    const page = content.portalPages[selectedPortal];
    setPortal(
      "fields",
      page.fields.map((field, fieldIndex) =>
        fieldIndex === index ? { ...field, [key]: value } : field,
      ),
    );
  };

  const save = async () => {
    if (!supabase) return;
    setSaving(true);
    setMessage("");
    const { error } = await supabase
      .from("site_content")
      .upsert({ id: "main", content, updated_at: new Date().toISOString() });
    setSaving(false);
    setMessage(
      error
        ? `সংরক্ষণ হয়নি: ${error.message}`
        : "পরিবর্তন সবার জন্য প্রকাশিত হয়েছে।",
    );
  };

  const signIn = async (event) => {
    event.preventDefault();
    if (!supabase) return;
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(`লগইন হয়নি: ${error.message}`);
  };

  const signOut = async () => {
    await supabase?.auth.signOut();
    setMessage("");
  };

  const addItem = (collection, item) =>
    setValue(collection, [...content[collection], item]);
  const removeItem = (collection, index) =>
    setValue(
      collection,
      content[collection].filter((_, itemIndex) => itemIndex !== index),
    );

  if (!supabase) {
    return (
      <main className="mx-auto min-h-[70vh] w-full max-w-2xl px-4 py-12">
        <div className="border-l-4 border-[#a14738] bg-white p-6">
          <h1 className="font-serif text-2xl font-bold">
            Supabase সংযোগ সেটআপ করুন
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#62655e]">
            অ্যাডমিন চালু করতে `.env.local`-এ `NEXT_PUBLIC_SUPABASE_URL` ও
            `NEXT_PUBLIC_SUPABASE_ANON_KEY` যোগ করে dev server restart করুন।
            টেবিল ও access policy-র নির্দেশনা README-তে আছে।
          </p>
        </div>
      </main>
    );
  }

  if (!session || session.user.app_metadata?.role !== "admin") {
    const signedIn = Boolean(session);
    return (
      <main className="mx-auto flex min-h-[72vh] w-full max-w-5xl items-center px-4 py-12">
        <div className="grid w-full overflow-hidden border border-[#e1dfd5] bg-white md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[#252d2a] px-7 py-9 text-white sm:px-10 sm:py-12">
            <p className="text-xs font-bold uppercase text-[#e1c47a]">
              TBF · CONTENT ADMIN
            </p>
            <h1 className="mt-4 max-w-sm font-serif text-3xl font-bold leading-tight">
              সাইটের কনটেন্ট, এক জায়গায়
            </h1>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
              নোটিশ, সময়সূচী, homepage, পোর্টাল ফর্ম এবং ছবি সম্পাদনা করুন।
              সংরক্ষণের পর পরিবর্তন সব ভিজিটরের কাছে আপডেট হবে।
            </p>
          </div>
          <div className="p-7 sm:p-10">
            <h2 className="font-serif text-xl font-bold">
              {signedIn ? "Admin access দরকার" : "অ্যাডমিন লগইন"}
            </h2>
            {signedIn ? (
              <div className="mt-5">
                <p className="text-sm leading-6 text-[#656860]">
                  এই অ্যাকাউন্টে admin role নেই। Supabase Auth user-এর
                  `app_metadata.role` হিসেবে `admin` সেট করে আবার লগইন করুন।
                </p>
                <button
                  className="mt-5 text-sm font-bold text-[#963d32]"
                  onClick={signOut}
                  type="button"
                >
                  অন্য অ্যাকাউন্ট ব্যবহার করুন
                </button>
              </div>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={signIn}>
                <TextField
                  label="ইমেইল"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />
                <TextField
                  label="পাসওয়ার্ড"
                  type="password"
                  value={password}
                  onChange={setPassword}
                />
                <button
                  className="min-h-11 w-full rounded bg-[#963d32] px-4 text-sm font-bold text-white hover:bg-[#7c2e26]"
                  type="submit"
                >
                  প্রবেশ করুন
                </button>
              </form>
            )}
            {message && (
              <p className="mt-4 text-sm text-[#963d32]" role="status">
                {message}
              </p>
            )}
          </div>
        </div>
      </main>
    );
  }

  const activeLabel = sections.find(([id]) => id === activeSection)?.[1];
  const copyGroups = [
    {
      title: "পরিচিতি ও হিরো",
      fields: [
        ["brandName", "সাইটের নাম"],
        ["brandSubtitle", "সাইটের উপশিরোনাম"],
        ["heroEyebrow", "হিরো ছোট শিরোনাম"],
        ["heroTitle", "হিরো শিরোনাম"],
        ["heroTitleAccent", "হাইলাইট শিরোনাম"],
        ["heroDescription", "হিরো বিবরণ", true],
        ["heroBadge", "পরীক্ষার পরিচিতি"],
        ["heroLocation", "অবস্থান"],
        ["heroApplyLabel", "আবেদন বাটন"],
        ["heroDatesLabel", "সময়সূচি বাটন"],
      ],
    },
    {
      title: "হোমপেজের বিভাগ",
      fields: [
        ["noticesEyebrow", "নোটিশ ছোট শিরোনাম"],
        ["noticesTitle", "নোটিশ শিরোনাম"],
        ["noticesDescription", "নোটিশ বিবরণ", true],
        ["noticeCountLabel", "নোটিশ গণনা লেবেল"],
        ["servicesEyebrow", "সেবা ছোট শিরোনাম"],
        ["servicesTitle", "সেবা শিরোনাম"],
        ["servicesDescription", "সেবা বিবরণ", true],
        ["datesEyebrow", "তারিখ ছোট শিরোনাম"],
        ["datesTitle", "তারিখ শিরোনাম"],
        ["journeyEyebrow", "যাত্রা ছোট শিরোনাম"],
        ["journeyTitle", "যাত্রা শিরোনাম"],
        ["journeyDescription", "যাত্রার বিবরণ", true],
        ["galleryEyebrow", "গ্যালারি ছোট শিরোনাম"],
        ["galleryTitle", "গ্যালারি শিরোনাম"],
        ["leadersEyebrow", "নেতৃত্ব ছোট শিরোনাম"],
        ["leadersTitle", "নেতৃত্ব শিরোনাম"],
        ["leadersDescription", "নেতৃত্ব বিবরণ", true],
        ["ctaTitle", "শেষের আহ্বান"],
        ["ctaDescription", "আহ্বানের বিবরণ", true],
      ],
    },
  ];

  const renderTextRows = (collection, fields, addLabel, emptyItem) => (
    <div className="space-y-3">
      {content[collection].map((item, index) => (
        <div
          className="grid gap-3 border-b border-[#e7e5dc] pb-3 sm:grid-cols-[1fr_1fr_auto]"
          key={`${collection}-${index}`}
        >
          {fields.map(([key, label]) => (
            <TextField
              key={key}
              label={label}
              value={item[key]}
              onChange={(value) => updateItem(collection, index, key, value)}
            />
          ))}
          <div className="flex items-end">
            <SmallButton
              tone="danger"
              onClick={() => removeItem(collection, index)}
            >
              <i className="fas fa-trash" aria-hidden="true" /> মুছুন
            </SmallButton>
          </div>
        </div>
      ))}
      <SmallButton onClick={() => addItem(collection, emptyItem)}>
        <i className="fas fa-plus" aria-hidden="true" /> {addLabel}
      </SmallButton>
    </div>
  );

  return (
    <div className="min-h-[82vh] bg-[#f4f3ed] text-[#252820]">
      <header className="border-b border-[#e0ded4] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#252d2a] text-[#e1c47a]">
              <i className="fas fa-sliders" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold uppercase text-[#963d32]">
                TBF · ADMIN
              </p>
              <h1 className="truncate font-serif text-lg font-bold">
                {activeLabel}
              </h1>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <span className="hidden text-xs text-[#77796f] sm:inline">
              {session.user.email}
            </span>
            <button
              type="button"
              onClick={save}
              disabled={saving}
              className="inline-flex min-h-10 items-center gap-2 rounded bg-[#963d32] px-4 text-sm font-bold text-white transition hover:bg-[#7c2e26] disabled:opacity-60"
            >
              <i
                className={`fas ${saving ? "fa-spinner fa-spin" : "fa-cloud-arrow-up"}`}
                aria-hidden="true"
              />
              {saving ? "সংরক্ষণ হচ্ছে" : "সংরক্ষণ"}
            </button>
            <button
              title="লগআউট"
              aria-label="লগআউট"
              onClick={signOut}
              type="button"
              className="grid h-10 w-10 place-items-center border border-[#deddd4] text-[#50534b] hover:bg-[#f5f4ef]"
            >
              <i
                className="fas fa-arrow-right-from-bracket"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1440px] gap-5 px-3 py-5 sm:px-7 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:py-8">
        <nav
          aria-label="অ্যাডমিন বিভাগ"
          className="flex gap-1 overflow-x-auto border-b border-[#deddd4] pb-2 lg:block lg:overflow-visible lg:border-0 lg:pb-0"
        >
          {sections.map(([id, label, icon]) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveSection(id)}
              className={`flex min-h-10 shrink-0 items-center gap-2 rounded px-3 text-left text-sm font-semibold transition lg:mb-1 lg:w-full ${activeSection === id ? "bg-[#252d2a] text-white" : "text-[#60635b] hover:bg-white"}`}
            >
              <i className={`fas ${icon} w-4 text-center`} aria-hidden="true" />
              {label}
            </button>
          ))}
          <a
            href="/"
            className="flex min-h-10 shrink-0 items-center gap-2 rounded px-3 text-sm font-semibold text-[#60635b] no-underline hover:bg-white lg:mt-5"
          >
            <i
              className="fas fa-arrow-up-right-from-square w-4 text-center"
              aria-hidden="true"
            />
            সাইট দেখুন
          </a>
        </nav>

        <main className="min-w-0 rounded border border-[#e0ded4] bg-white p-4 sm:p-6 lg:p-8">
          {message && (
            <p
              className={`mb-5 border-l-4 px-4 py-3 text-sm ${message.startsWith("সংরক্ষণ হয়নি") ? "border-[#963d32] bg-[#fff4f1] text-[#7c2e26]" : "border-[#47775b] bg-[#edf7ef] text-[#315a40]"}`}
              role="status"
            >
              {message}
            </p>
          )}

          {activeSection === "overview" && (
            <>
              <SectionHeading
                title="সাইট কনটেন্ট"
                description="একটি পরিবর্তন সংরক্ষণ করলে তা সব ভিজিটরের সাইটে live হবে।"
              />
              <div className="grid gap-px border border-[#e1dfd5] bg-[#e1dfd5] sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["নোটিশ", content.notices.length],
                  ["গুরুত্বপূর্ণ তারিখ", content.importantDates.length],
                  [
                    "ছবির লিংক",
                    content.gallery.length + content.heroSlides.length,
                  ],
                  ["পরিচালক", content.leaders.length],
                ].map(([label, value]) => (
                  <div className="bg-white px-5 py-4" key={label}>
                    <p className="text-sm text-[#77796f]">{label}</p>
                    <p className="mt-1 font-serif text-2xl font-bold text-[#963d32]">
                      {value.toLocaleString("bn-BD")}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-[#e1dfd5] pt-5">
                <h3 className="font-semibold">প্রকাশনা অবস্থা</h3>
                <p className="mt-2 text-sm text-[#70736b]">
                  Supabase record `site_content/main` হলো public website-এর
                  shared source। ড্যাশবোর্ড থেকে save না করা পর্যন্ত সম্পাদনা
                  শুধু এই session-এ থাকবে।
                </p>
              </div>
            </>
          )}

          {activeSection === "home" && (
            <>
              <SectionHeading
                title="হোমপেজ সম্পাদনা"
                description="হোমপেজের পরিচিতি, বিভাগ ও প্রদর্শিত পরিসংখ্যান।"
              />
              {copyGroups.map((group) => (
                <section className="mb-8" key={group.title}>
                  <h3 className="mb-3 font-semibold">{group.title}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {group.fields.map(([key, label, multiline]) => (
                      <TextField
                        key={key}
                        label={label}
                        multiline={multiline}
                        value={content.siteCopy[key]}
                        onChange={(value) => setCopy(key, value)}
                      />
                    ))}
                  </div>
                </section>
              ))}
              <section className="border-t border-[#e1dfd5] pt-5">
                <SectionHeading
                  title="পরিসংখ্যান"
                  action={
                    <SmallButton
                      onClick={() => addItem("stats", { value: "", label: "" })}
                    >
                      <i className="fas fa-plus" aria-hidden="true" /> যোগ করুন
                    </SmallButton>
                  }
                />
                {renderTextRows(
                  "stats",
                  [
                    ["value", "সংখ্যা / মান"],
                    ["label", "ব্যাখ্যা"],
                  ],
                  "পরিসংখ্যান যোগ করুন",
                  { value: "", label: "" },
                )}
              </section>
              <section className="mt-8 border-t border-[#e1dfd5] pt-5">
                <SectionHeading
                  title="প্রয়োজনীয় সেবা"
                  description="হোমপেজের service card-এর লিংক, icon class, শিরোনাম ও বিবরণ।"
                  action={
                    <SmallButton
                      onClick={() =>
                        addItem("serviceCards", {
                          href: "/",
                          icon: "fa-circle",
                          title: "",
                          description: "",
                        })
                      }
                    >
                      <i className="fas fa-plus" aria-hidden="true" /> যোগ করুন
                    </SmallButton>
                  }
                />
                {content.serviceCards.map((card, index) => (
                  <div
                    className="mb-4 grid gap-3 border-b border-[#e7e5dc] pb-4 sm:grid-cols-2"
                    key={`service-${index}`}
                  >
                    {["href", "icon", "title", "description"].map((key) => (
                      <TextField
                        key={key}
                        label={
                          {
                            href: "লিংক",
                            icon: "Font Awesome icon class",
                            title: "শিরোনাম",
                            description: "বিবরণ",
                          }[key]
                        }
                        value={card[key]}
                        onChange={(value) =>
                          updateItem("serviceCards", index, key, value)
                        }
                      />
                    ))}
                    <SmallButton
                      tone="danger"
                      onClick={() => removeItem("serviceCards", index)}
                    >
                      <i className="fas fa-trash" aria-hidden="true" /> মুছুন
                    </SmallButton>
                  </div>
                ))}
              </section>
            </>
          )}

          {activeSection === "notices" && (
            <>
              <SectionHeading
                title="নোটিশ বোর্ড"
                description="প্রকাশিত নোটিশ যোগ, সম্পাদনা বা সরান।"
                action={
                  <SmallButton
                    onClick={() =>
                      addItem("notices", {
                        id: Date.now(),
                        date: "",
                        category: "General",
                        title: "",
                        url: "",
                      })
                    }
                  >
                    <i className="fas fa-plus" aria-hidden="true" /> নোটিশ যোগ
                  </SmallButton>
                }
              />
              {content.notices.map((notice, index) => (
                <div
                  className="mb-5 border-b border-[#e7e5dc] pb-5"
                  key={notice.id ?? index}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["date", "তারিখ"],
                      ["category", "ধরন"],
                      ["title", "নোটিশের শিরোনাম"],
                      ["url", "নোটিশ লিংক"],
                    ].map(([key, label]) => (
                      <TextField
                        key={key}
                        label={label}
                        value={notice[key]}
                        onChange={(value) =>
                          updateItem("notices", index, key, value)
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-3">
                    <SmallButton
                      tone="danger"
                      onClick={() => removeItem("notices", index)}
                    >
                      <i className="fas fa-trash" aria-hidden="true" /> নোটিশ
                      মুছুন
                    </SmallButton>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeSection === "dates" && (
            <>
              <SectionHeading
                title="গুরুত্বপূর্ণ তারিখ"
                action={
                  <SmallButton
                    onClick={() =>
                      addItem("importantDates", {
                        day: "",
                        month: "",
                        title: "",
                        desc: "",
                        highlight: false,
                      })
                    }
                  >
                    <i className="fas fa-plus" aria-hidden="true" /> তারিখ যোগ
                  </SmallButton>
                }
              />
              {content.importantDates.map((date, index) => (
                <div
                  className="mb-5 grid gap-3 border-b border-[#e7e5dc] pb-5 sm:grid-cols-2"
                  key={`date-${index}`}
                >
                  {[
                    ["day", "দিন"],
                    ["month", "মাস"],
                    ["title", "অনুষ্ঠান"],
                    ["desc", "বিবরণ"],
                  ].map(([key, label]) => (
                    <TextField
                      key={key}
                      label={label}
                      value={date[key]}
                      onChange={(value) =>
                        updateItem("importantDates", index, key, value)
                      }
                    />
                  ))}
                  <label className="flex items-center gap-2 text-sm font-semibold">
                    <input
                      type="checkbox"
                      checked={Boolean(date.highlight)}
                      onChange={(event) =>
                        updateItem(
                          "importantDates",
                          index,
                          "highlight",
                          event.target.checked,
                        )
                      }
                    />
                    বিশেষভাবে হাইলাইট
                  </label>
                  <SmallButton
                    tone="danger"
                    onClick={() => removeItem("importantDates", index)}
                  >
                    <i className="fas fa-trash" aria-hidden="true" /> মুছুন
                  </SmallButton>
                </div>
              ))}
            </>
          )}

          {activeSection === "media" && (
            <>
              <SectionHeading
                title="ছবি ও গ্যালারি"
                description="ছবির সরাসরি URL দিন; public image URL ব্যবহার করুন।"
              />
              {[
                ["heroSlides", "হিরো স্লাইড"],
                ["gallery", "গ্যালারি ছবি"],
              ].map(([collection, title]) => (
                <section className="mb-8" key={collection}>
                  <SectionHeading
                    title={title}
                    action={
                      <SmallButton
                        onClick={() => addItem(collection, "https://")}
                      >
                        <i className="fas fa-plus" aria-hidden="true" /> ছবি যোগ
                      </SmallButton>
                    }
                  />
                  {content[collection].map((url, index) => (
                    <div
                      className="mb-3 flex items-end gap-2"
                      key={`${collection}-${index}`}
                    >
                      <div className="min-w-0 flex-1">
                        <TextField
                          label={`ছবি ${index + 1} · URL`}
                          value={url}
                          onChange={(value) =>
                            setValue(
                              collection,
                              content[collection].map((item, itemIndex) =>
                                itemIndex === index ? value : item,
                              ),
                            )
                          }
                        />
                      </div>
                      <SmallButton
                        tone="danger"
                        onClick={() => removeItem(collection, index)}
                      >
                        <i className="fas fa-trash" aria-hidden="true" />
                        <span className="sr-only">ছবি মুছুন</span>
                      </SmallButton>
                    </div>
                  ))}
                </section>
              ))}
              <TextField
                label="আমাদের যাত্রা ছবির URL"
                value={content.siteCopy.journeyImage}
                onChange={(value) => setCopy("journeyImage", value)}
              />
            </>
          )}

          {activeSection === "team" && (
            <>
              <SectionHeading
                title="পরিচালনা পর্ষদ"
                description="নাম, পদবি, ছবি ও বাণী সম্পাদনা করুন."
                action={
                  <SmallButton
                    onClick={() =>
                      addItem("leaders", {
                        id: Date.now(),
                        name: "",
                        role: "",
                        img: "",
                        speech: "",
                      })
                    }
                  >
                    <i className="fas fa-plus" aria-hidden="true" /> সদস্য যোগ
                  </SmallButton>
                }
              />
              {content.leaders.map((leader, index) => (
                <div
                  className="mb-6 border-b border-[#e7e5dc] pb-6"
                  key={leader.id ?? index}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["name", "নাম"],
                      ["role", "পদবি"],
                      ["img", "ছবির URL"],
                      ["speech", "বাণী", true],
                    ].map(([key, label, multiline]) => (
                      <TextField
                        key={key}
                        label={label}
                        multiline={multiline}
                        value={leader[key]}
                        onChange={(value) =>
                          updateItem("leaders", index, key, value)
                        }
                      />
                    ))}
                  </div>
                  <div className="mt-3">
                    <SmallButton
                      tone="danger"
                      onClick={() => removeItem("leaders", index)}
                    >
                      <i className="fas fa-trash" aria-hidden="true" /> সদস্য
                      মুছুন
                    </SmallButton>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeSection === "navigation" && (
            <>
              <SectionHeading
                title="নেভিগেশন লিংক"
                description="URL ও menu label সম্পাদনা করুন."
                action={
                  <SmallButton
                    onClick={() =>
                      addItem("navLinks", { href: "/", label: "নতুন লিংক" })
                    }
                  >
                    <i className="fas fa-plus" aria-hidden="true" /> লিংক যোগ
                  </SmallButton>
                }
              />
              {content.navLinks.map((link, index) => (
                <div
                  className="mb-4 grid gap-3 border-b border-[#e7e5dc] pb-4 sm:grid-cols-[1fr_1fr_auto]"
                  key={`link-${index}`}
                >
                  <TextField
                    label="URL / route"
                    value={link.href}
                    onChange={(value) =>
                      updateItem("navLinks", index, "href", value)
                    }
                  />
                  <TextField
                    label="মেনুতে লেখা"
                    value={link.label}
                    onChange={(value) =>
                      updateItem("navLinks", index, "label", value)
                    }
                  />
                  <div className="flex items-end">
                    <SmallButton
                      tone="danger"
                      onClick={() => removeItem("navLinks", index)}
                    >
                      <i className="fas fa-trash" aria-hidden="true" /> মুছুন
                    </SmallButton>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeSection === "general" && (
            <>
              <SectionHeading
                title="সাইট সেটিংস"
                description="লোগো, আবেদন অবস্থা ও footer পরিচিতি।"
              />
              <label className="mb-6 flex min-h-12 items-center justify-between gap-4 border-b border-[#e7e5dc] pb-5 text-sm font-semibold">
                <span>আবেদন চালু আছে</span>
                <input
                  className="h-5 w-5 accent-[#963d32]"
                  type="checkbox"
                  checked={content.registrationOpen}
                  onChange={(event) =>
                    setValue("registrationOpen", event.target.checked)
                  }
                />
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <TextField
                  label="লোগোর URL"
                  value={content.LOGO}
                  onChange={(value) => setValue("LOGO", value)}
                />
                {[
                  ["footerName", "প্রতিষ্ঠানের নাম"],
                  ["footerCopyright", "কপিরাইট লাইন"],
                  ["footerCredit", "ক্রেডিট"],
                  ["footerUrl", "ক্রেডিট লিংক"],
                ].map(([key, label]) => (
                  <TextField
                    key={key}
                    label={label}
                    value={content.siteCopy[key]}
                    onChange={(value) => setCopy(key, value)}
                  />
                ))}
              </div>
              <div className="mt-8 border-t border-[#e7e5dc] pt-5">
                <h3 className="mb-3 font-semibold">
                  Portal form-এর সাধারণ লেখা
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["portalFormHeading", "ফর্ম শিরোনাম"],
                    ["portalFormHelper", "ফর্ম নির্দেশনা"],
                    ["portalPrivacyNote", "গোপনীয়তা নোট"],
                    ["portalDemoMessage", "ফর্ম জমার বার্তা", true],
                  ].map(([key, label, multiline]) => (
                    <TextField
                      key={key}
                      label={label}
                      multiline={multiline}
                      value={content.siteCopy[key]}
                      onChange={(value) => setCopy(key, value)}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === "portals" && (
            <>
              <SectionHeading
                title="পোর্টাল পেজ ও ফর্ম"
                description="পেজের শিরোনাম, সহায়ক লেখা, নির্দেশনা এবং form field সম্পাদনা করুন."
              />
              <label className="mb-6 block max-w-xs text-sm font-semibold">
                পেজ নির্বাচন
                <select
                  className={inputClass}
                  value={selectedPortal}
                  onChange={(event) => setSelectedPortal(event.target.value)}
                >
                  {Object.entries(portalLabels).map(([key, label]) => (
                    <option value={key} key={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              {(() => {
                const page = content.portalPages[selectedPortal];
                return (
                  <>
                    <div className="mb-8 grid gap-4 md:grid-cols-2">
                      {[
                        ["eyebrow", "ছোট শিরোনাম"],
                        ["title", "পেজ শিরোনাম"],
                        ["description", "পেজ বিবরণ", true],
                        ["asideTitle", "সহায়তা শিরোনাম"],
                        ["asideText", "সহায়তা বিবরণ", true],
                        ["submitLabel", "বাটনের লেখা"],
                      ].map(([key, label, multiline]) => (
                        <TextField
                          key={key}
                          label={label}
                          multiline={multiline}
                          value={page[key]}
                          onChange={(value) => setPortal(key, value)}
                        />
                      ))}
                    </div>
                    <section className="mb-8 border-t border-[#e1dfd5] pt-5">
                      <SectionHeading
                        title="সহায়তা তালিকা"
                        action={
                          <SmallButton
                            onClick={() =>
                              setPortal("tips", [
                                ...page.tips,
                                "নতুন নির্দেশনা",
                              ])
                            }
                          >
                            <i className="fas fa-plus" aria-hidden="true" />{" "}
                            নির্দেশনা যোগ
                          </SmallButton>
                        }
                      />
                      {page.tips.map((tip, index) => (
                        <div
                          className="mb-3 flex items-end gap-2"
                          key={`tip-${index}`}
                        >
                          <div className="flex-1">
                            <TextField
                              label={`নির্দেশনা ${index + 1}`}
                              value={tip}
                              onChange={(value) =>
                                setPortal(
                                  "tips",
                                  page.tips.map((item, itemIndex) =>
                                    itemIndex === index ? value : item,
                                  ),
                                )
                              }
                            />
                          </div>
                          <SmallButton
                            tone="danger"
                            onClick={() =>
                              setPortal(
                                "tips",
                                page.tips.filter(
                                  (_, itemIndex) => itemIndex !== index,
                                ),
                              )
                            }
                          >
                            <i className="fas fa-trash" aria-hidden="true" />
                            <span className="sr-only">নির্দেশনা মুছুন</span>
                          </SmallButton>
                        </div>
                      ))}
                    </section>
                    <section className="border-t border-[#e1dfd5] pt-5">
                      <SectionHeading
                        title="Form field"
                        action={
                          <SmallButton
                            onClick={() =>
                              setPortal("fields", [
                                ...page.fields,
                                {
                                  name: "fieldName",
                                  label: "নতুন ফিল্ড",
                                  placeholder: "",
                                  type: "text",
                                  required: true,
                                },
                              ])
                            }
                          >
                            <i className="fas fa-plus" aria-hidden="true" />{" "}
                            ফিল্ড যোগ
                          </SmallButton>
                        }
                      />
                      {page.fields.map((field, index) => (
                        <div
                          className="mb-5 border-b border-[#e7e5dc] pb-5"
                          key={`${field.name}-${index}`}
                        >
                          <div className="grid gap-3 md:grid-cols-2">
                            {[
                              ["name", "Field key"],
                              ["label", "লেবেল"],
                              ["placeholder", "Placeholder"],
                            ].map(([key, label]) => (
                              <TextField
                                key={key}
                                label={label}
                                value={field[key]}
                                onChange={(value) =>
                                  updatePortalField(index, key, value)
                                }
                              />
                            ))}
                            <label className="block text-sm font-semibold">
                              Field type
                              <select
                                className={inputClass}
                                value={field.type || "text"}
                                onChange={(event) =>
                                  updatePortalField(
                                    index,
                                    "type",
                                    event.target.value,
                                  )
                                }
                              >
                                {[
                                  "text",
                                  "tel",
                                  "email",
                                  "password",
                                  "select",
                                  "textarea",
                                  "checkbox",
                                ].map((type) => (
                                  <option key={type}>{type}</option>
                                ))}
                              </select>
                            </label>
                            <label className="flex items-center gap-2 text-sm font-semibold">
                              <input
                                type="checkbox"
                                checked={field.required !== false}
                                onChange={(event) =>
                                  updatePortalField(
                                    index,
                                    "required",
                                    event.target.checked,
                                  )
                                }
                              />
                              আবশ্যক
                            </label>
                            <label className="flex items-center gap-2 text-sm font-semibold">
                              <input
                                type="checkbox"
                                checked={Boolean(field.wide)}
                                onChange={(event) =>
                                  updatePortalField(
                                    index,
                                    "wide",
                                    event.target.checked,
                                  )
                                }
                              />
                              পুরো সারি জুড়ে দেখান
                            </label>
                            {field.type === "select" && (
                              <TextField
                                label="বিকল্পগুলো (প্রতি লাইনে একটি)"
                                multiline
                                value={(field.options || [])
                                  .map((option) => option.label)
                                  .join("\n")}
                                onChange={(value) =>
                                  updatePortalField(
                                    index,
                                    "options",
                                    value
                                      .split("\n")
                                      .filter(Boolean)
                                      .map((option) => ({
                                        value: option,
                                        label: option,
                                      })),
                                  )
                                }
                              />
                            )}
                          </div>
                          <div className="mt-3">
                            <SmallButton
                              tone="danger"
                              onClick={() =>
                                setPortal(
                                  "fields",
                                  page.fields.filter(
                                    (_, fieldIndex) => fieldIndex !== index,
                                  ),
                                )
                              }
                            >
                              <i className="fas fa-trash" aria-hidden="true" />{" "}
                              ফিল্ড মুছুন
                            </SmallButton>
                          </div>
                        </div>
                      ))}
                    </section>
                  </>
                );
              })()}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
