import { CircularProgressbarWithSummary } from "./CircularProgressbarWithSummary";

const Template = function (args) {
  return <CircularProgressbarWithSummary {...args} />;
};

const Default = Template.bind({});
const WithCaptions = Template.bind({});
const NoLabel = Template.bind({});

Default.args = {
  percentage: 98,
  from: "От",
  to: "До",
  summary: "98%",
};

WithCaptions.args = {
  percentage: 18,
  from: "От",
  to: "До",
  summary: "18%",
};

NoLabel.args = {
  percentage: 18,
  summary: "18%",
};

export default {
  component: CircularProgressbarWithSummary,
  title: "ECOPRO/CircularProgressBar",
};

export { Default, WithCaptions, NoLabel };
