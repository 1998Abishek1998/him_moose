const NewTag = () => {
    return (
        // <div className="relative inline-block">
            <div
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 transform rotate-12 shadow-lg"
                style={{
                    clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)'
                }}
            >
                NEW!
            </div>
        // </div>
    )
}

export default NewTag