export const Button = ({ children, onClick, className ,...props }) => {
  return (
    <button {...props} onClick={onClick} className={`border bg-blue-200 p-2 hover:bg-blue-600 ${className}`}>
      {children}
    </button>
  )
}

