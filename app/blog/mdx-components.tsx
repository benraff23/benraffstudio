import Link from 'next/link'
import type { ComponentProps } from 'react'

// Styles des éléments MDX accordés à l'identité visuelle BenRaff Studio.
export const mdxComponents = {
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="mt-14 mb-5 text-2xl sm:text-3xl font-bold tracking-tight text-white" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="mt-10 mb-4 text-xl font-semibold tracking-tight text-white" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="mb-6 text-lg font-light text-[#b8b8b8] leading-relaxed" {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="mb-6 flex flex-col gap-2 text-lg font-light text-[#b8b8b8] leading-relaxed list-disc pl-6 marker:text-[#c8e84e]" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="mb-6 flex flex-col gap-2 text-lg font-light text-[#b8b8b8] leading-relaxed list-decimal pl-6 marker:text-[#c8e84e]" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => <li className="pl-1" {...props} />,
  a: ({ href = '', ref: _ref, ...props }: ComponentProps<'a'>) => (
    <Link href={href} className="text-[#c8e84e] underline underline-offset-4 hover:text-[#d4f05a] transition-colors" {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => <strong className="text-white font-semibold" {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="my-8 border-l-2 border-[#c8e84e] pl-6 text-xl font-light italic text-white leading-relaxed" {...props} />
  ),
  hr: () => <hr className="my-12 border-white/[0.08]" />,
  img: ({ alt = '', ...props }: ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className="my-8 w-full rounded-2xl" loading="lazy" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[0.9em] text-[#c8e84e]" {...props} />
  ),
}
