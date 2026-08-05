interface BrowserMockProps {
  url: string
  children: React.ReactNode
  className?: string
}

/** Fenêtre de navigateur factice — utilisée pour illustrer le mini-site
 *  de restitution remis au client. */
export default function BrowserMock({ url, children, className = '' }: BrowserMockProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden bg-white border border-[rgba(28,28,28,0.08)]
                  shadow-[0_30px_60px_rgba(28,28,28,0.14)] ${className}`}
    >
      <div className="bg-[#eae7e1] px-4 py-2.5 flex items-center gap-2 border-b border-[rgba(28,28,28,0.08)]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#d5d1c8] flex-shrink-0" />
        ))}
        <div className="flex-1 ml-2 bg-white rounded px-3 py-1 text-[11px] text-[#6b6b6b] truncate">
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}
