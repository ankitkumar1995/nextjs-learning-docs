import React from "react";

const UsersCard = ({ type }: { type: string }) => {
  return (
    <div>
      UsersCard
      <div>
        <div>2024/25</div>
        <div>...</div>
      </div>
      <div>6,123</div>
      <div>{type}</div>
    </div>
  );
};

export default UsersCard;
