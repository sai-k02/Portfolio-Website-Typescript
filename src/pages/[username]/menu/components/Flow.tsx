import { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection
} from 'react-flow-renderer';

import { NextPage } from 'next';

interface FlowProps {
  technologies?: String[]

}




// const initialEdges: Edge[] = [
//   { id: 'e1-2', source: '1', target: '2' },
// ];

const fitViewOptions: FitViewOptions = {
  padding: 0
}

const Flow: NextPage<FlowProps> = (props) => {
  let technologies = props.technologies;

  const initialNodes = () => {
    let nodes: Node[] = [];
    technologies && technologies.forEach((technology, index) => {
      nodes.push({
        id: index.toString(),
        data: { label: technology },
        position: { x: 0, y: (index * 50) },
      })
    }
    )
    return nodes;
  }
  // technologies.map((technology: String, index: number) => (
  //   {

  //   id: index,
  //   data: {label: technology},
  //   position: {x: Math.random() * 100, y: Math.random() * 100},
  //   },

  // ))
  // { id: '1', data: { label: 'Node 1' }, position: { x: 5, y: 5 } },
  // { id: '2', data: { label: 'Node 2' }, position: { x: 5, y: 100 } },


  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  // const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  // const onEdgesChange = useCallback(
  //   (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   [setEdges]
  // );
  // const onConnect = useCallback(
  //   (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
  //   [setEdges]
  // );

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      //onEdgesChange={onEdgesChange}
      //onConnect={onConnect}
      fitView
      fitViewOptions={fitViewOptions}
    />



  )
}

export default Flow