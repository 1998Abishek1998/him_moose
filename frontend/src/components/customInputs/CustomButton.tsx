import type React from "react";

function CustomButton({ isActive, onClick, children, type }: { isActive?: boolean, onClick: () => void, children: React.ReactNode, type: 'pmy' | 'sec' | 'ter' }) {
  return (
    <>
      {
        type === 'pmy' ?
          <button
            className={`
        px-1.5 py-2 m-2 border-2 rounded-xl font-semibold transition-all duration-300
        ${isActive ? 'bg-orange-600 text-black border-orange-600' : 'bg-transparent text-orange-600 border-orange-600'}
        hover:bg-orange-600 hover:text-black
        md:px-4 md:py-1.5 md:text-sm
        sm:px-3 sm:py-1 sm:text-xs
      `}
            onClick={onClick}
          >
            {children}
          </button>
          : type === 'sec' ? <button
            className={`
        px-1.5 py-2 m-2 border-2 rounded-xl font-semibold transition-all duration-300
        ${!isActive ? 'bg-orange-600 text-black border-orange-600' : 'bg-transparent text-orange-600 border-orange-600'}
        hover:bg-transparent hover:text-orange-600
        bg-orange-600 text-black
        md:px-4 md:py-1.5 md:text-sm
        sm:px-3 sm:py-1 sm:text-xs
      `}
            onClick={onClick}

          >
            {children}
          </button> : <>/</>
      }
    </>
  );
}
export default CustomButton