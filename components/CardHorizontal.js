export default function CardHorizontal({children}) {
  return (
    <div className="container relative flex items-center w-full h-full ">
        <div className="w-full h-full overflow-x-auto pt-2 whitespace-nowrap scroll-smooth scrollbar-hide">
            {children}
        </div>
    </div>
  )
}
