export default function PagePlaceholder({ title }) {
  return (
    <section className="mx-auto min-h-[50vh] w-full max-w-[1140px] px-4 py-[38px] sm:py-14">
      <div className="mb-7">
        <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase text-maroon before:inline-block before:h-px before:w-[18px] before:bg-gold">
          টিবিএফ ২০২৬
        </span>
        <h2 className="mt-2 font-serif text-[1.55rem] font-extrabold text-ink">
          {title}
        </h2>
        <p className="mt-1.5 max-w-[520px] text-[0.88rem] text-ink-soft">
          এই পেজটি এখনও কনভার্ট করা হয়নি। এখানে আপনার বাকি HTML থেকে কনভার্ট
          করা কন্টেন্ট বসবে।
        </p>
      </div>
    </section>
  );
}
