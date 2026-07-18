function Highlights(){

    return(
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado pra criar a melhor experiencia</p>
                </div>

                <div className=" grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/titanio-premium.jpg" alt="" />
                        <h3 className="font-bold mb-2 text-3xl">Titanio Premium</h3>
                        <p className="text-gray-300">Estrutura em titanio de grau aeroespacial. O smarthe mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../../public/img/iphone-silo.jpg" alt="" />
                        <h3 className="font-bold mb-2 text-3xl">IOS 19</h3>
                        <p className="text-gray-300">O sistema operacional mais avancado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient ">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O Chip mais poderoso em um smartphone</p>
                            <img className="w-full rounded-2xl mb-4" src="../../public/img/iphone-camera-zoom.jpg" alt="" />

                    <ul className="space-y-3 text-gray-300">
                        <li>GPU 20% mais rapida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 nucleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de camera pro avancado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="textxl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automatico</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8">
                            <div className="text-4xl font-bold text-orange-600 mb-4">12MP</div>
                            <h4 className="textxl font-semibold mb-2">Ultra wide</h4>
                            <p className="text-gray-400">Campo de visao de 120 com modo noturno</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="textxl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">zoom optico de 5x com estabilizacao</p>
                        </div>
                    </div>




                    
                </div>
            </div>
        </section>
    )
}
export default Highlights