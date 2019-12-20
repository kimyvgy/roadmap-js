import _map from 'lodash/map'
import _isEmpty from 'lodash/isEmpty'

import React, { Component } from 'react'
import TreeNodeBody from './Body'
import { TreeNodeData } from '~/types'

import './index.scss'

export interface TreeNodeProps {
  dataSource: TreeNodeData;
}

class TreeNode extends Component<TreeNodeProps> {
  static defaultProps = {
    children: [],
  }

  render(): JSX.Element {
    const { key, render, children } = this.props.dataSource

    return (
      <div className="treee__node">
        <TreeNodeBody nodeKey={key} render={render} />

        {_isEmpty(children) ? null : (
          <div className="treee__node-children">
            {_map(children, (child: TreeNodeData) => (
              <TreeNode key={child.key} dataSource={child} />)
            )}
          </div>
        )}
      </div>
    )
  }
}

export default TreeNode
