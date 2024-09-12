import { Button as ButtonUi } from '@nextui-org/button';

type Props = {
  type?: 'button' | 'submit';
  text: string;
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  color: 'default' | 'primary';
};

const Button = ({
  type = 'button',
  color = 'default',
  text,
  onClick,
  className,
  isDisabled = false,
  isLoading = false,
}: Props) => {
  return (
    <ButtonUi
      type={type}
      className={className}
      onClick={() => {
        onClick && onClick();
      }}
      color={color}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      {text}
    </ButtonUi>
  );
};

export default Button;
