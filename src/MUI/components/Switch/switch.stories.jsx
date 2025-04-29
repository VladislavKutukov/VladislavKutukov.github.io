import SwitchLabels from "./switch";

export default {
    title: "MUI/Switch",
    component: SwitchLabels,
}

const Switches = (args) => <SwitchLabels {...args}/>

export const SwitchLable = Switches.bind({})