import Checkboxes from "./checkboxes";
import IndeterminateCheckbox from "./checkboxesWithChilds";

export default {
    title: "MUI/Checkboxes",
    component: Checkboxes,
}

const Default = (args) => <Checkboxes {...args}/>
const Childs = (args) => <IndeterminateCheckbox {...args}/>

export const Basic = Default.bind({})
export const WithChilds = Childs.bind({})