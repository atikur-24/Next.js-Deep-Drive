import { getDictionary } from "@/lib/dictionaries";

export default async function InternalizationPage({ params: { lang } }) {
  const dict = await getDictionary(lang, ["common", "about"]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{dict.about.title}</h1>
        <p>{dict.about.description}</p>
      </div>
    </section>
  );
}
