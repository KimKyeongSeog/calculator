const CalDelBtn = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button
      className="btn-style bg-green-500 active:bg-green-700"
      onClick={onClickDel}
    >
      Del
    </button>
  );
};

export default CalDelBtn;
