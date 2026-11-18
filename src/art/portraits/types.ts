import type { ReactNode } from 'react'

export interface PortraitLayer {
  id: string
  /** Depth in px: negative sits behind the face, positive floats in front. */
  z: number
  node: ReactNode
}

export interface PortraitArt {
  width: number
  height: number
  /** Painted back to front. */
  layers: PortraitLayer[]
}
