import React from "react"
import supervisor from "../assets/images/icon-supervisor.svg"
import teamBuilder from "../assets/images/icon-team-builder.svg"
import karma from "../assets/images/icon-karma.svg"
import calculator from "../assets/images/icon-calculator.svg"

const CardPreview = () => {
    return (
        <div className='py-16 px-8 flex flex-col font-poppins'>
            <div className='flex flex-col items-center justify-center gap-2 '>
                <h1 className='text-2xl font-extralight text-very-dark-blue'>Reliable, efficient delivery</h1>
                <h1 className='text-2xl font-semibold text-very-dark-blue'>Powered by Technology</h1>
                <p className='text-sm text-center font-normal text-grayish-blue mt-5 md:w-1/3'>
                    Our Artificial Intelligence powered tools use millions of project data points to ensure that your
                    project is successful
                </p>
            </div>

            <div className='flex flex-col gap-6 mt-16 md:flex md:flex-row md:items-center md:justify-center'>
                <div className='h-56 bg-white border-t-4 rounded-md border-t-cyan p-6 flex flex-col justify-between shadow-[0px_10px_15px_3px_#cbd5e0] md:w-80'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-semibold text-very-dark-blue'>Supervisor</h1>
                        <p className='text-sm font-normal text-grayish-blue'>
                            Monitors activity to identify project roadblocks
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <span></span>
                        <img src={supervisor} alt='' />
                    </div>
                </div>

                <div className='md:flex md:flex-col md:gap-8'>
                    <div className='h-56 bg-white border-t-4 rounded-md border-t-red p-6 flex flex-col justify-between shadow-[0px_10px_15px_3px_#cbd5e0] md:w-80'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-semibold text-very-dark-blue'>Team Builder</h1>
                            <p className='text-sm font-normal text-grayish-blue'>
                                Scans our talent network to create the optimal for your project
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <span></span>
                            <img src={teamBuilder} alt='' />
                        </div>
                    </div>

                    <div className='h-56 bg-white border-t-4 rounded-md border-t-orange p-6 flex flex-col justify-between shadow-[0px_10px_15px_3px_#cbd5e0] md:w-80'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-semibold text-very-dark-blue'>Karma</h1>
                            <p className='text-sm font-normal text-grayish-blue'>
                                Regularly evalautes our talent to ensure quality
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <span></span>
                            <img src={karma} alt='' />
                        </div>
                    </div>
                </div>
                <div className='h-56 bg-white border-t-4 rounded-md border-t-blue p-6 flex flex-col justify-between shadow-[0px_10px_15px_3px_#cbd5e0] md:w-80'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-semibold text-very-dark-blue'>Calculator</h1>
                        <p className='text-sm font-normal text-grayish-blue'>
                            Uses data from past project to provide better delivery estimates
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <span></span>
                        <img src={calculator} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPreview
