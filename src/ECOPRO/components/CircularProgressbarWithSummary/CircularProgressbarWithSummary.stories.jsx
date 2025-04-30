import { CircularProgressbarWithSummary } from "./CircularProgressbarWithSummary";

const Template = function (args) {
  return <CircularProgressbarWithSummary {...args} />;
};

const ОбычныйПрогрессбар = Template.bind({});
const ОбычныйПрогрессбар2 = Template.bind({});
const ПрогрессбарБезПодписей = Template.bind({});

ОбычныйПрогрессбар.args = {
  percentage: 98,
  from: "От",
  to: "До",
  summary: "98%",
};

ОбычныйПрогрессбар2.args = {
  percentage: 18,
  from: "От",
  to: "До",
  summary: "18%",
};

ПрогрессбарБезПодписей.args = {
  percentage: 18,
  summary: "18%",
};

export default {
  component: CircularProgressbarWithSummary,
  title: "ECOPRO/Круглый Прогресс бар",
};

export { ОбычныйПрогрессбар, ОбычныйПрогрессбар2, ПрогрессбарБезПодписей };
