import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "edge" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "nodes" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  
};
