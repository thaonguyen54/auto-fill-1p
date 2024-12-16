import WithHeader from '@src/layout/with-header';
import RootContainer from '@utils/dom';
import React from 'react'
import MainContent from './_components/main-content';

const CreateVault = () => {
  return (
    <div>
      <WithHeader headerName="Create Vault">
        <MainContent/>
      </WithHeader>
    </div>
  );
}

RootContainer.getRoot().render(<CreateVault />);

export default CreateVault
