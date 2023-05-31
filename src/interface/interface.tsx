import { TablerIconsProps } from "@tabler/icons-react";

export interface Note {
    id: number;
    label: string,
    color: string,
    icon: (props: TablerIconsProps) => JSX.Element,
  
}