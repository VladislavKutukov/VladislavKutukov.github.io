import "./TopBar.css";

import type { TopBarProps } from "./TopBar.type";

import { joinClassNames } from "../Utils";
import Button from "../Button";
import Glyph from "../Glyph";

/**
 * Главная панель, используется для навигации, доступу
 * к основному меню, выводу времени и прочее
 *
 * Кнопка главного меню отображается только если есть функция
 * обратного вызова (ФОВ) `onToggleMenu`
 *
 * @param {String} className Имя дополнительного класса
 * @param {Node} children Дочерние компоненты, выводятся в центре
 * @param {Function} onToggleMenu ФОВ вызывается при нажатии на кнопку меню
 * @param {ReactComponent} LogoComponent выводит логотип
 * @param {Function} RightSideRenderFn функция рендера элементов справа
 */
function TopBar({
  className,
  children,
  onToggleMenu,
  LogoComponent,
  RightSideRenderFn,
}: TopBarProps) {
  return (
    <div className={joinClassNames(["top_bar", className])}>
      {onToggleMenu ? (
        <>
          <Button
            className="top_bar__main_menu_button"
            onClick={onToggleMenu}
          >
            <Glyph name="Menu" className="top_bar__menu_glyph" />
          </Button>
          <div className="top_bar__separator" />
        </>
      ) : null}
      {LogoComponent}
      <div className="top_bar__body">{children}</div>
      {RightSideRenderFn ? (
        <div className="top_bar__right">{RightSideRenderFn()}</div>
      ) : null}
    </div>
  );
}

TopBar.defaultProps = {
  className: undefined,
  children: undefined,
  LogoComponent: undefined,
  RightSideRenderFn: undefined,
  onToggleMenu: undefined,
};

export default TopBar;
