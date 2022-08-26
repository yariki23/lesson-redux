import React from 'react';
import Options from './Options';
import AvailableOption from './AvailableOption';
import SelectedOption from './SelectedOption';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOption title="Available option" />
      <SelectedOption title="Selected option" />
    </div>
  );
};

export default TransferList;
