interface SectionMainProps {
  title: string,
  children: React.ReactNode
}

export default function SectionMain({ title, children }: SectionMainProps) {
  return (
    <div className="mt-16 flex flex-col sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 2xl:mx-32">
      <h3 className="mb-8 text-zinc-100 font-semibold transition-all text-2xl">{title}</h3>
      <div className="flex gap-8 justify-center">
        {children}
      </div>
    </div>
  )
}