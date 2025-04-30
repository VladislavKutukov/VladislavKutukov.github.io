import SwitchLabels from "./switch";

export default {
    title: "MUI/Переключатель",
    component: SwitchLabels,
}

const Switches = (args) => <SwitchLabels {...args} />

export const ПереключательСМеткой = Switches.bind({})