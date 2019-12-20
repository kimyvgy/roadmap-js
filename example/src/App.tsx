import React from 'react'
import { Hello, TreeDiagram, TreeNodeData } from 'treee-js'

const treeData: TreeNodeData = {
  key: 'root',
  render: 'Root',
  children: [
    { key: 'element-1', render: <h2>Element 1</h2> },
    {
      key: 'element-2',
      render: <h2>Element 2</h2>,
      children: [
        { key: 'sub-item-1', render: <h2>Sub item 1</h2> },
        { key: 'sub-item-2', render: <h2>Sub item 2</h2> },
      ]
    },
  ]
}

const App: React.FC = () => {
  return (
    <div className="container">
      <Hello compiler="Typescript" framework="React" />

      <TreeDiagram dataSource={treeData} />
    </div>
  );
}

export default App;
