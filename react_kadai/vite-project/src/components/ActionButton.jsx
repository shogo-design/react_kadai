// components/ActionButton.jsx

// ð½ propsãè¿½å 
export const ActionButton = ({ text, action }) => {
  return (
    <>
      {/* ð½ `onClick` ã§ã¯ãªãã¯æã«æå®ããé¢æ°ãå®è¡ã§ãã */}
      <button type="button" onClick={action}>
        {text}
      </button>
    </>
  );
};
