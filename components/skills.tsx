import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Blogging", icon: "/imges/blogger_48px.png" },
    { name: "Html", icon: "/imges/html_5_48px.png" },
    { name: "JavaScript", icon: "/imges/javascript_48px.png" },
    { name: "node.js", icon: "/imges/icons8-nodejs-48.png" },
    { name: "Next.js", icon: "/imges/icons8-nextjs-64.png" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto -ml-40 ">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center justify-center space-x-2 rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white shadow-md hover:shadow-lg transition"
        >
          <img src={skill.icon} alt={skill.name} className="h-5 w-5" />
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}
