import React, { Component, ReactNode } from 'react'

export interface TreeNodeBodyProps {
  nodeKey: string;
  render: ReactNode;
}

export default class TreeNodeBody extends Component<TreeNodeBodyProps> {
  render(): JSX.Element {
    const { nodeKey, render } = this.props

    if (typeof render === 'string' || typeof render === 'object') {
      return <div className="treee__node-body">{render}</div>
    }

    throw new Error(
      `NodeItem ${nodeKey} contains invalid "render" property. ` +
      `Expect: ReactNode instead of "${typeof render}".`
    )
  }
}
