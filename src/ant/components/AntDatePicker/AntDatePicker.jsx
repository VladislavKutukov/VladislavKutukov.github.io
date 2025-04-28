import { DatePicker as AntdDatePicker } from "antd";
import momentGenerateConfig from "rc-picker/lib/generate/moment";

const CustomDatePicker = AntdDatePicker.generatePicker(momentGenerateConfig);

export default function AntDatePicker({ className, ...props }) {
  return (
    <CustomDatePicker hourStep={1} minuteStep={1} secondStep={5} {...props} />
  );
}
