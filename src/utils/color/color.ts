export class Color {
  readonly R: number;
  readonly G: number;
  readonly B: number;
  readonly A: number;

  constructor(red: number, green: number, blue: number, alpha: number) {
    if (!Color.IsValidChannel(red)) {
      throw new Error("Incorrect value provided for red");
    }

    if (!Color.IsValidChannel(green)) {
      throw new Error("Incorrect value provided for green");
    }

    if (!Color.IsValidChannel(blue)) {
      throw new Error("Incorrect value provided for blue");
    }

    if (!Color.IsValidChannel(alpha, true)) {
      throw new Error("Incorrect value provided for alpha");
    }

    this.R = red;
    this.G = green;
    this.B = blue;
    this.A = alpha;
  }

  private static IsValidChannel(val: number, isAlpha = false): boolean {
    const max = isAlpha ? 1 : 255;

    if (val < 0 || val > max) return false;

    if (!isAlpha && val % 1 !== 0) return false;

    return true;
  }

  public AsString(): string {
    return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`;
  }

  public static FromString(str: string): Color {
    const arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",");

    const r = Number(arr[0]),
      g = Number(arr[1]),
      b = Number(arr[2]),
      a = Number(arr[3]);

    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
      throw new Error("Invalid string");
    }

    return new Color(r, g, b, a);
  }
}
