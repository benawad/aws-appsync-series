import { useEffect } from "react";

interface Props {
  onEffect: () => void | (() => void);
}

export const OnMount = ({ onEffect }: Props) => {
  useEffect(onEffect, []);

  return null;
};
