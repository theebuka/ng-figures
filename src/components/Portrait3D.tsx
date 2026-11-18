import type { PortraitArt } from '../art/portraits/types'
import { useTilt3D } from '../motion/motion'

/**
 * Stacks a portrait's layers at different depths so the whole thing has real
 * parallax when it tilts. Each layer is its own SVG sharing one viewBox.
 */
export function Portrait3D({ art, label, tilt = 10 }: { art: PortraitArt; label: string; tilt?: number }) {
  const ref = useTilt3D<HTMLDivElement>(tilt)

  return (
    <div className="portrait" ref={ref} role="img" aria-label={label}>
      <div className="portrait__stage" style={{ aspectRatio: `${art.width} / ${art.height}` }}>
        {art.layers.map((layer) => (
          <svg
            key={layer.id}
            className={`portrait__layer portrait__layer--${layer.id}`}
            viewBox={`0 0 ${art.width} ${art.height}`}
            style={{ transform: `translateZ(${layer.z}px)` }}
            aria-hidden="true"
            focusable="false"
          >
            {layer.node}
          </svg>
        ))}
      </div>
    </div>
  )
}
