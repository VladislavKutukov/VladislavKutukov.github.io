import BasicAlerts from "./alert";
import TransitionAlerts from "./interactiveAlert";

export default {
    title: "MUI/Предупреждение",
    component: BasicAlerts,
}

const AlertExamples = (args) => <BasicAlerts {...args} />
const Interactive = (args) => <TransitionAlerts {...args} />

export const ВозможныеПредепреждения = AlertExamples.bind({})
export const ПредупреждениеПоКнопке = Interactive.bind({})