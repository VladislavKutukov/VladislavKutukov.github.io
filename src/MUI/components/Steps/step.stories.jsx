import LinearStepper from "./step";

export default {
    title: "MUI/Step",
    component: LinearStepper,
}

const Linear = (args) => <LinearStepper {...args}/>

export const LinearSteps = Linear.bind({})

