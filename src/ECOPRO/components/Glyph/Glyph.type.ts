export interface GlyphProps {
    name: keyof typeof import("./Glyphs"); // Имя глифа, которое будет использоваться для загрузки
    className?: string;                    // Дополнительный класс для стилизации
  }