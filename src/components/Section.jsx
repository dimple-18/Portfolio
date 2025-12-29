export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
