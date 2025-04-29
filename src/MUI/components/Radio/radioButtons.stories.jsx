import RadioButtonsGroup from "./radio";
import ColorRadioButtons from "./coloriesRadioButtons";

export default {
    title: "MUI/Radio",
    component: RadioButtonsGroup,
}

const RadioGroup = (args) => <RadioButtonsGroup {...args}/>
const Colored = (args) => <ColorRadioButtons {...args}/>

export const RadioButtonGroup = RadioGroup.bind({})
export const ColoredRadioButtonGroup = Colored.bind({})