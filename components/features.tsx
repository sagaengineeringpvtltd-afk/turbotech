export default function Features() {
  return (
    <section className="py-20 px-4 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent text-sm font-semibold tracking-wide uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
              Empowering a Sustainable Future With TurboTech
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              TurboTech is a reliable supplier of premium machinery and industrial tools. We specialize in sourcing superior equipment from trusted global manufacturers, ensuring that our clients receive only the highest quality machinery for their operations.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              In addition to machinery distribution, TurboTech provides custom heavy-body design services, creating practical and durable solutions suited to the specific needs of our clients. We utilize cutting-edge engineering techniques to deliver high-performance results that exceed industry standards.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our commitment to excellence and customer satisfaction drives every project we undertake. We partner with organizations across diverse industries to provide reliable machinery and innovative engineering solutions.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <p className="text-foreground/50 text-sm">Industrial Machinery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
