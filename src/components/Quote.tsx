import Image from 'next/image'

interface QuoteProps {
  name: string
  title: string
  quote: string
  imageSrc: string
}

const Quote: React.FC<QuoteProps> = ({ name, title, quote, imageSrc }) => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-blue-50">
      <div className="flex max-w-4xl items-center justify-center space-x-6">
        <div className="w-52 flex-shrink-0">
          <div className="flex h-[200px] w-[200px] items-center justify-center overflow-clip rounded-full">
            <Image src={imageSrc} alt={name} width={600} height={400} />
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-gray-600">{title}</p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="rounded border border-blue-800 bg-white p-6">
            <blockquote className="font-serif text-lg text-gray-800">
              "{quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
