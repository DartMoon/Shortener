import { Switch } from '@nextui-org/switch';

type Props = {
  text?: string;
  defaultSelected?: boolean;
  onChange: () => void;
};

const Switcher = ({ text, defaultSelected = false, onChange }: Props) => {
  return (
    <Switch defaultSelected={defaultSelected} onChange={onChange}>
      <span className="font-medium">{!!text && text}</span>
    </Switch>
  );
};

export default Switcher;
