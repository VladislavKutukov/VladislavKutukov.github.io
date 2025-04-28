
import ButtonWithIcon from "./ButtonWithIcon";

export default function ButtonWithIconDocPage() {
  return (
    <div>
      <section style={{ width: "100%" }}>
        <h2>Кнопка обычного размера</h2>

        <div  >
          <ButtonWithIcon glyphNameLeft="AlignLeft" primary>
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </div>

        <div >
          <ButtonWithIcon glyphNameRight="AlignRight" primary>
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </div>

        <div>
          <ButtonWithIcon glyphNameLeft="AlignLeft" glyphNameRight="AlignRight">
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </div>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка малого размера</h2>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            primary
          >
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </div>

        <div>
          <ButtonWithIcon
            glyphNameRight="AlignRight"
            className="button--small"
            primary
          >
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </div>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            glyphNameRight="AlignRight"
          >
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </div>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка большого размера</h2>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            primary
          >
            Кнопка первичная с левым глифом
          </ButtonWithIcon>
        </div>

        <div>
          <ButtonWithIcon
            glyphNameRight="AlignRight"
            className="button--big"
            primary
          >
            Кнопка первичная с правым глифом
          </ButtonWithIcon>
        </div>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            glyphNameRight="AlignRight"
          >
            Кнопка с двумя глифами
          </ButtonWithIcon>
        </div>
      </section>
      <section style={{ width: "100%" }}>
        <h2>Кнопка без текста</h2>

        <div>
          <ButtonWithIcon glyphNameLeft="AlignLeft" primary />
        </div>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--small"
            primary
          />
        </div>

        <div>
          <ButtonWithIcon
            glyphNameLeft="AlignLeft"
            className="button--big"
            primary
          />
        </div>
      </section>
    </div>
  );
}
