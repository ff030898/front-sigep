import React from 'react';
import { Input, InputProps } from "@chakra-ui/react";

interface MaskedInputProps extends InputProps {
  mask: (value: string) => string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ mask, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = mask(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return <Input {...props} onChange={handleChange} />;
};

export default MaskedInput;
