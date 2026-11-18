import type { Place } from '../data/types'
import { MAP_HEIGHT, MAP_WIDTH, STATES, project, type Region1960 } from './map-data'

interface Props {
  region: Region1960
  places: Place[]
  active: number
  onSelect: (index: number) => void
}

const LABEL_OFFSET: Record<NonNullable<Place['label']>, { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' }> = {
  right: { dx: 28, dy: 8, anchor: 'start' },
  left: { dx: -28, dy: 8, anchor: 'end' },
  above: { dx: 0, dy: -24, anchor: 'middle' },
  below: { dx: 0, dy: 42, anchor: 'middle' },
}

/** Today's states, shaded by the region they fell in at independence. */
export function NigeriaMap({ region, places, active, onSelect }: Props) {
  return (
    <svg className="map" viewBox={`-20 -20 ${MAP_WIDTH + 40} ${MAP_HEIGHT + 40}`} role="group" aria-label="Map of Nigeria">
      <g>
        {STATES.map((state) => (
          <path
            key={state.id}
            className={`map__state${state.region === region ? ' map__state--home' : ''}`}
            d={state.d}
          >
            <title>{state.name}</title>
          </path>
        ))}
      </g>
      <g>
        {places.map((place, i) => {
          const [x, y] = project(place.lon, place.lat)
          const label = LABEL_OFFSET[place.label ?? 'right']
          return (
            <g
              key={place.name}
              className={`map__place${i === active ? ' is-active' : ''}`}
              transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}
              role="button"
              tabIndex={0}
              aria-pressed={i === active}
              aria-label={`${place.name}. ${place.note}`}
              onPointerEnter={() => onSelect(i)}
              onFocus={() => onSelect(i)}
              onClick={() => onSelect(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onSelect(i)
                }
              }}
            >
              <circle className="map__hit" r="34" />
              <circle className="map__pulse" r="12" />
              <circle className="map__dot" r="12" />
              <text className="map__label" x={label.dx} y={label.dy} textAnchor={label.anchor}>
                {place.name}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
