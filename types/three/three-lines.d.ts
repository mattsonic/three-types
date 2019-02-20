import { Line, LineBasicMaterial, Geometry } from "three";

export class LineMaterial extends LineBasicMaterial {
}

export class Line2 extends Line {
}

export class LineGeometry extends Geometry {
    setPositions(positions: number[]): void
    setColors(colors: number[]): void
}