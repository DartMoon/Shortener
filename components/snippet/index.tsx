import { TooltipProps } from '@nextui-org/react';
import { Snippet as SnippetUi } from '@nextui-org/snippet';

type Props = {
  value?: string;
  tooltipProps?: Partial<TooltipProps>;
  className?: string;
  onCopy?: (value: string | string[]) => void;
};
const Snippet = ({ value, tooltipProps, onCopy, className }: Props) => {
  return (
    <SnippetUi
      size="md"
      className={className}
      tooltipProps={tooltipProps}
      onCopy={(value) => {
        onCopy && onCopy(value);
      }}
    >
      {value}
    </SnippetUi>
  );
};

export default Snippet;
