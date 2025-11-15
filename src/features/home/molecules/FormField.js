import Input from '/components/atoms/Input';
import TextArea from '/components/atoms/TextArea';
import Select from '/components/atoms/Select';

export default function FormField({ type, placeholder, options }) {
  if (type === 'textarea') return <TextArea placeholder={placeholder} />;
  if (type === 'select') return <Select options={options} />;
  return <Input placeholder={placeholder} />;
}