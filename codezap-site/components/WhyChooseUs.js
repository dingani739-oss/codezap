export default function WhyChooseUs() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="font-semibold">Expertise</h3>
          <p>Years of experience in IT hardware, software, and integrations.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="font-semibold">Reliability</h3>
          <p>Trusted by SMBs across South Africa for dependable service.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="font-semibold">Innovation</h3>
          <p>Modern, cloud-first solutions built to scale with your growth.</p>
        </div>
      </div>
    </section>
  )
}
