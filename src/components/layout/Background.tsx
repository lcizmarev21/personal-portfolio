export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0D0D]">

            <div className="absolute top-1/4 h-300 w-300 rounded-full bg-[#D2D7D9] opacity-15 blur-3xl animate-float animate-pulse " />

            <div className="absolute bottom right-1/15 h-150 w-150 rounded-full bg-[#D2D7D9] opacity-15 blur-3xl animate-float animate-pulse  [animation-delay:5s]" />

            <div className="absolute inset-0 bg-[#0B0D0D] opacity-40" />

            <div className="noise absolute inset-0 opacity-[0.03] " />

        </div>
    )
}