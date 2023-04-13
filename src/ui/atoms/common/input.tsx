import { FC } from 'react'
import { StyledInput } from '../../../styled/common/input';

type Props = {
  type?: string;
  value?: string;
  text?: string;
  handleValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ type = 'text', value = '', text = 'email', handleValue }) => {
  return (
    <StyledInput placeholder={text} type={type} onChange={handleValue} />
  )
}