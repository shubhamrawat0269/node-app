import BaseNode from "../common/BaseNode";

export const InputNode = ({ data }) => {
  return (
    <BaseNode title="Input Node" outputs={[{ id: "value" }]}>
      <div className="node-input">
        <label>Name</label>
        <input defaultValue={data?.name || ""} />
      </div>
    </BaseNode>
  );
};
