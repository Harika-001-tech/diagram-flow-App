import React from "react";
import { Handle, Position } from "@xyflow/react";

export function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  return (
    
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
