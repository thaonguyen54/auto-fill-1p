import React from "react";

const CreateVaultHeader = () => {
  return (
    <div className="bg-createVaultHeader px-8 py-6 bg-contain border-b border-t-2 border rounded-t-lg">
      <h1 className="text-2xl font-medium font-sans text-center">
        Create a new vault
      </h1>
      <p className="text-center mt-1 text-gray-600">
        Choose an icon, name, and description for your vault.
      </p>
    </div>
  );
};

export default CreateVaultHeader;
