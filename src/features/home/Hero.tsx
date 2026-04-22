export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center px-8">
            <div className="w-full flex flex-row justify-between items-center gap-6">

                {/* Left side */}
                <div className="flex-1  justify-start pl-50">
                    <h1>
                        Hello, I'm Leon. <br /> <br />
                        Front end developer focused on building <br />
                        clean and responsive web applications.
                    </h1>

                    <button className="mt-10 opacity-45 font-thin"> More </button>
                </div>


                {/* Right side */}
                <div className="flex-1 flex justify-end pr-50">

                    <div className="flex flex-col gap-6">
                        <div>
                            <p> Based in Croatia </p>
                            <p className="font-thin"> Language : English / Croatian </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"/>
                            </span>
                            <p> Available for work </p>
                        </div>

                    </div>
                    
                </div>

            </div>
        </section>
    );
}