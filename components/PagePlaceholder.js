export default function PagePlaceholder({ title }) {
  return (
    <section className="section-padding container" style={{ minHeight: "50vh" }}>
      <div className="section-header">
        <span className="eyebrow">টিবিএফ ২০২৬</span>
        <h2>{title}</h2>
        <p className="lede">এই পেজটি এখনও কনভার্ট করা হয়নি। এখানে আপনার বাকি HTML থেকে কনভার্ট করা কন্টেন্ট বসবে।</p>
      </div>
    </section>
  );
}
