import "./Glyph.css";

import { Suspense } from "react";
import type { GlyphProps } from "./Glyph.type";
import * as Glyphs from "./Glyphs";

import { joinClassNames } from "../Utils";

function Loading() {
  return <div className="glyph__loading" />;
}

/**
 * Символ обозначающий какое-либо слово
 *
 * Глиф находится в квадратной области.
 * Размер области по умолчанию `1rem`.
 * Для переопределения размера используется
 * кастомное css свойство `--glyph-size`
 */
function Glyph({ name, className }: GlyphProps) {
  const Image = Glyphs[name];
  return (
    <div className={joinClassNames(["glyph", className])}>
      <Suspense fallback={<Loading />}>
        <Image />
      </Suspense>
    </div>
  );
}

Glyph.defaultProps = {
  className: "",
};

export default Glyph;
