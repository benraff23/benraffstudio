import Link from 'next/link'
import type { ComponentProps } from 'react'

export const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1c]" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-[#1c1c1c]" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-6 text-lg font-light text-[#4a4a4a] leading-relaxed" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mb-6 flex flex-col gap-2 text-lg font-light text-[#4a4a4a] leading-relaxed list-disc pl-6 marker:text-[#1c1c1c]" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="mb-6 flex flex-col gap-2 text-lg font-light text-[#4a4a4a] leading-relaxed list-decimal pl-6 marker:text-[#1c1c1c]" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => <li className="pl-1" {...props} />,
  a: ({ href = '', ref: _ref, ...props }: ComponentProps<'a'>) => (
    <Link href={href} className="text-[#1c1c1c] underline underline-offset-4 hover:text-[#6b6b6b] transition-colors" {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => <strong className="text-[#1c1c1c] font-semibold" {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="my-10 border-l border-[#1c1c1c] pl-6 text-xl font-light italic text-[#1c1c1c] leading-relaxed" {...props} />
  ),
  hr: () => <hr className="my-12 border-[rgba(28,28,28,0.1)]" />,
  img: ({ alt = '', ...props }: ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className="my-8 w-full rounded-xl" loading="lazy" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="rounded bg-[rgba(28,28,28,0.06)] px-1.5 py-0.5 text-[0.9em] text-[#1c1c1c]" {...props} />
  ),
}
