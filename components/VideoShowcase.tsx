import { Section, SectionHeader } from '@/components/Section';

const CLIPS = [
  '/videos/clip-01.mp4',
  '/videos/clip-02.mp4',
  '/videos/clip-03.mp4',
  '/videos/clip-04.mp4',
  '/videos/clip-05.mp4',
  '/videos/clip-06.mp4',
];

/**
 * Portrait job clips (H.264, ~3-9s). Rendered as a responsive row of
 * vertical "reel" cards with native controls, muted + playsInline so
 * mobile Safari/Chrome allow inline playback.
 */
export default function VideoShowcase() {
  return (
    <Section className="bg-cream">
      <SectionHeader
        eyebrow="See us in action"
        title="Real crews, real results."
        description="A few quick clips from recent jobs around West Michigan — tap any to play."
        center
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {CLIPS.map((src) => (
          <div
            key={src}
            className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-950 shadow-soft ring-1 ring-brand-900/10"
          >
            <video
              className="h-full w-full object-cover"
              src={src}
              controls
              muted
              playsInline
              preload="metadata"
              loop
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
