import { ReactNode } from 'react'

export interface TreeNodeData {
  key: string;
  render: ReactNode | Function;
  children?: Array<TreeNodeData>;
}

