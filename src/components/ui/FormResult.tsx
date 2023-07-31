import Link from 'next/link';

interface FormResultProps {
  text: string
  isLink?: boolean
}

export function FormResult({ text, isLink }: FormResultProps) {
  return (
    <div className="flex gap-2 flex-col items-start justify-center w-full">
      <h3 className="text-2md">Result</h3>
      <div className="px-[1.16rem] py-[1.05rem] w-full bg-accent bg-opacity-10">
        {isLink ? (
          <Link href={text} target="_blank" className="text-2md text-accent">
            {text}
          </Link>
        ) : (
          <p className="text-2md text-accent">{text}</p>
        )}
      </div>
    </div>
  )
}
