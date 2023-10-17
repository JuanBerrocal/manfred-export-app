import React from 'react';
import * as classes from './customSelectColor.styles';

interface Props {
  label: string;
  children: React.ReactNode;
}

export const CustomSelectColor: React.FC<Props> = ({ label, children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={classes.selectColor} onClick={toggleIsOpen}>
        <span>{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.277 14.7522L8.45062 10.5007C8.27687 10.3076 8.41388 10 8.67361 10H16.3264C16.5861 10 16.7231 10.3076 16.5494 10.5007L12.723 14.7522C12.6038 14.8846 12.3962 14.8846 12.277 14.7522Z"
            fill="#787673"
          />
        </svg>
      </div>
      {isOpen && <>{children}</>}
    </>
  );
};
