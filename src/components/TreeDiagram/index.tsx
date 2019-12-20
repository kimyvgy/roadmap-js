import React from 'react'
import TreeNode from '~/components/TreeNode'

import { TreeNodeData } from '~/types'
import { resolveClassName } from '~/utils/prop'

import './index.scss'

export interface TreeDiagramProps {
  dataSource?: TreeNodeData;
  horizontal?: boolean;
}

export default class TreeDiagram extends React.Component<TreeDiagramProps, {}> {
  static defautlProps = {
    dataSource: null,
    horizontal: false,
  }

  render(): JSX.Element {
    return (
      <div className={resolveClassName({
        'treee': true,
        'treee--horizontal': this.props.horizontal,
        'treee--vertical': !this.props.horizontal,
      })}>
        {!this.props.dataSource ? null : (
          <TreeNode dataSource={this.props.dataSource} />
        )}
      </div>
    )
  }
}
