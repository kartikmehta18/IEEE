import React from 'react'

function Sponsors() {
  return (
    <div>
      
       <section id="sponsors" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center mb-12">Our Sponsors</h2>
                    {["Gold", "Silver", "Bronze"].map((tier, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-2xl font-bold text-center mb-6">{tier} Sponsors</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
                                        <img src={`/placeholder.svg?height=100&width=200&text=${tier} Sponsor`} alt={`${tier} Sponsor ${i + 1}`} className="w-full h-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Sponsors
