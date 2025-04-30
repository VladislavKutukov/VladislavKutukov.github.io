import Checkboxes from "./checkboxes";
import IndeterminateCheckbox from "./checkboxesWithChilds";

export default {
    title: "MUI/Флажки",
    component: Checkboxes,
}

const Default = (args) => <Checkboxes {...args} />
const Childs = (args) => <IndeterminateCheckbox {...args} />

export const СтандартныеФлажки = Default.bind({})
export const ФлажкиССозависимостью = Childs.bind({})