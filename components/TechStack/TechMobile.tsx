const TechMobile = () => {
  const cardData = [
    {
      title: "Languages",
      content: ["GoLang", "Typescript", "Python", "C++"],
    },
    {
      title: "Frameworks",
      content: ["React", "React Native", "Express", "Gin"],
    },
    {
      title: "Databases",
      content: ["MongoDB", "Supabase", "PostgreSQL", "DynamoDB"],
    },
    {
      title: "Tools",
      content: ["Git", "Docker", "Postman", "Linux"],
    },
  ]

  return (
    <section className="font-pixelify border-4 p-4">
      <h2 className="font-bold text-4xl mb-6">Tech Stack</h2>

      <div className="space-y-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border-2 p-4 shadow-lg shadow-foreground/40"
          >
            <h3 className="font-bold text-2xl mb-1">{card.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {card.content.map((item, idx) => (
                <p key={idx} className="text-lg leading-6">
                  {">"} {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechMobile
