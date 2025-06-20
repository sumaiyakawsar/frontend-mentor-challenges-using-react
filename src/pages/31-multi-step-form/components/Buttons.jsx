const Buttons = ({ nextStep, prevStep, currentStep, handleNext }) => {
    return (
        <div className='buttons'>
            {/* Step 1: only Next */}
            {currentStep === 1 && (
                <>
                    <button type="button"></button>
                    <button type="button" className="btn btn__next" onClick={handleNext}>
                        Next Step
                    </button>
                </>
            )}

            {/* Steps 2 and 3: Go Back + Next */}
            {(currentStep === 2 || currentStep === 3) && (
                <>
                    <button type="button" className='btn btn__link' onClick={prevStep}>
                        Go Back
                    </button>
                    <button type="button" onClick={nextStep} className="btn btn__next">
                        Next Step
                    </button>
                </>
            )}

            {/* Step 4: Go Back + Confirm */}
            {currentStep === 4 && (
                <>
                    <button type="button" className='btn btn__link' onClick={prevStep}>
                        Go Back
                    </button>
                    <button type="submit" className="btn btn__submit">
                        Confirm
                    </button>
                </>
            )}

        </div>
    )
}

export default Buttons