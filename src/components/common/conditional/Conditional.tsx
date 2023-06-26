import { ReactNode } from "react";

interface ConditionalProps {
  condition: boolean,
  children: ReactNode
}

export default function Conditional(props: ConditionalProps) {
  if (props.condition) return (<>{props.children}</>)
  else return (<></>)
}