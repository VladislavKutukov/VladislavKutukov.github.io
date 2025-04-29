import BasicAlerts from "./alert";
import TransitionAlerts from "./interactiveAlert";

export default {
    title: "MUI/Alert",
    component: BasicAlerts,
}

const AlertExamples = (args) => <BasicAlerts {...args}/>
const Interactive = (args) => <TransitionAlerts {...args}/>

export const Alerts = AlertExamples.bind({})
export const AlertByButton = Interactive.bind({})