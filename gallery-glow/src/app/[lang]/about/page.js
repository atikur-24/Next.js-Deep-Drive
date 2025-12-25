export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">About Us</h1>
        <p className="mt-4 text-gray-600">We build modern, scalable web solutions that help businesses grow.</p>
      </div>

      {/* Content */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Who We Are</h2>
          <p className="leading-relaxed text-gray-600">
            We are a small team of passionate developers focused on creating fast, secure, and user-friendly web applications. Our goal is to turn ideas into high-quality digital products.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">What We Do</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Frontend development with React & Next.js</li>
            <li>• Clean UI with Tailwind CSS</li>
            <li>• Scalable and maintainable code</li>
            <li>• Performance & SEO optimization</li>
          </ul>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-12 rounded-xl bg-gray-50 p-6 text-center">
        <p className="text-gray-700">We believe in simplicity, performance, and long-term collaboration.</p>
      </div>
    </section>
  );
}
