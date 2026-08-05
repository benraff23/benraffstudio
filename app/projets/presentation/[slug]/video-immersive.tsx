import Reveal from './reveal'

export default function VideoImmersive({
  url,
  poster,
  titre,
}: {
  url: string
  poster?: string
  titre: string
}) {
  return (
    <section className="bg-[#1c1c1c] py-20 sm:py-28 px-[var(--gutter)]" aria-labelledby="video-title">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 id="video-title" className="label label-on-dark mb-8">Vidéo</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black
                          border border-[rgba(247,245,241,0.08)]">
            <video
              src={url}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              aria-label={`Vidéo — ${titre}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
