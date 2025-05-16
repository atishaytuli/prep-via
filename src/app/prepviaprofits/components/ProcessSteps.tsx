interface ProcessStepProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-8 items-start relative">
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 bg-white text-cyan-600 z-10 font-medium">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold font-poppins text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 pt-4 text-lg">{description}</p>
      </div>
    </div>
  )
}

interface ProcessStepsProps {
  steps: Array<{
    number: string
    title: string
    description: string
  }>
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-16 mb-24 relative max-w-3xl">
      {/* Vertical line connecting all steps */}
      <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-cyan-400"></div>

      {steps.map((step, index) => (
        <ProcessStep
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  )
}
