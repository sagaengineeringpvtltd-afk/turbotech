export default function VisionMission() {
  return (
    <section className="py-20 px-4 md:py-32 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              To become a leading provider of industrial machinery and custom engineering solutions, recognized globally for our commitment to quality, innovation, and customer success. We aspire to enable businesses worldwide to optimize their operations through superior machinery and tailored engineering expertise.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/70">Deliver high-quality machinery and tools that enhance productivity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/70">Provide innovative custom engineering solutions tailored to client needs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/70">Build long-term relationships with customers through trust and reliability</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span className="text-foreground/70">Support sustainable business practices in all our operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
