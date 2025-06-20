import React from "react";

export interface PropInfo {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
}

export function PropsTable({ props }: { props: PropInfo[] }) {
  return (
    <table className="my-4 w-full border-collapse text-left text-xs md:text-sm">
      <thead>
        <tr>
          <th className="border-b p-2">Prop</th>
          <th className="border-b p-2">Type</th>
          <th className="border-b p-2">Default</th>
          <th className="border-b p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name}>
            <td className="border-b p-2 font-mono">{prop.name}</td>
            <td className="border-b p-2 font-mono">{prop.type}</td>
            <td className="border-b p-2 font-mono">
              {prop.defaultValue ?? "-"}
            </td>
            <td className="border-b p-2">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
