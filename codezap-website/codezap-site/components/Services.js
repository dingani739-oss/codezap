export default function Services() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-semibold">Hardware Supply</h3>
          <p>Reliable PCs, servers, and peripherals for your business needs.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-semibold">Software Licensing</h3>
          <p>Official licenses for productivity suites, OS, and security tools.</p>
        </div>
        <div className="p-6 border rounded-lg shadow">
          <h3 className="text-xl font-semibold">ISV Solutions</h3>
          <p>Custom integrations with Xero, QuickBooks, MYOB and more.</p>
        </div>
      </div>
    </section>
  )
}
