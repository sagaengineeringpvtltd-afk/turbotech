'use client'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Major Energy Initiative",
      desc: "A long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%202%20%281%29-RNOwBQ1BDeD1h5MIuK3ZiJ91vUP5j3.png"
    },
    {
      id: 2,
      title: "Industrial Automation Upgrade",
      desc: "A long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%202%20%281%29-RNOwBQ1BDeD1h5MIuK3ZiJ91vUP5j3.png"
    }
  ];

  return (
    <section className="py-24 bg-white px-8 -mb-20" id="projects">
      <div className="container mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-start mb-16">
  {/* Left Side: Badge + Heading */}
  <div className="w-full md:w-1/2 text-left">
    <span className="bg-[#B6FF00] text-[#000000] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
      # Our Work
    </span>
    <h2 className="text-4xl font-bold mt-4">Projects We’ve Delivered</h2>
  </div>

  {/* Right Side: Paragraph */}
  <div className="w-full md:w-1/2 lg:w-max text-left md:text-right mt-6 md:mt-0">
    <p className="text-gray-500 max-w-md">
      At TurboTech, we take pride in our track record of successful projects that have made a significant impact on our clients' operations. Our projects showcase our commitment to quality and innovation.
    </p>
  </div>
</div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-2xl overflow-hidden h-96 relative group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-white">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}