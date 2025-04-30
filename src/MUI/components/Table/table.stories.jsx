import Table from "./table";

export default {
    title: "MUI/Таблица",
    component: Table,
}

const Common = (args) => <Table {...args} />

export const ПримерТаблицы = Common.bind({})

