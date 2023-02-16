export const Square = ({children, updateBoard, index, isSelected}) => { 
  function manageClick() {
    updateBoard(index)
  }
  const className = `square ${isSelected? 'is-selected' : ''}`

  return (
    <div className={className} onClick={manageClick}>
      {children}
    </div>
  )
}