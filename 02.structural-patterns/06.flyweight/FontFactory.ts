import Font, { type FontType } from './Font';

class FontFactory {
  cached: Map<string, Font>;

  getFont(fontFamily: FontType, size: number, color: string) {
    const key = `${fontFamily}${size}${color}`;

    if (!this.cached.has(key)) {
      const newFont = new Font(fontFamily, size, color);
      this.cached.set(key, newFont);
    }
    return this.cached.get(key) as Font;
  }
}

export default new FontFactory();
