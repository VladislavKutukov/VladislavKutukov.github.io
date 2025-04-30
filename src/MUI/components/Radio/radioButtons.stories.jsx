import RadioButtonsGroup from "./radio";
import ColorRadioButtons from "./coloriesRadioButtons";

export default {
    title: "MUI/Радиокнопка",
    component: RadioButtonsGroup,
}

const RadioGroup = (args) => <RadioButtonsGroup {...args} />
const Colored = (args) => <ColorRadioButtons {...args} />

export const ГруппыРадиоКнопок = RadioGroup.bind({})
export const ЦветныеРадиоКнопки = Colored.bind({})