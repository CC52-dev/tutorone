"use client"

export function SplineHero() {
  return (
    <div className="w-full h-64 sm:h-80 lg:h-96 relative bg-white">
      {/* Subjects Display */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-md">
          {/* Mathematics */}
          <div className="bg-black text-white p-2 sm:p-3 lg:p-4 border-2 sm:border-4 border-black text-center">
            <div className="text-xs sm:text-sm lg:text-base font-black tracking-wider">MATH</div>
            <div className="text-xs sm:text-sm text-gray-300">ALGEBRA → CALCULUS</div>
          </div>
          
          {/* Sciences */}
          <div className="bg-white text-black p-2 sm:p-3 lg:p-4 border-2 sm:border-4 border-black text-center">
            <div className="text-xs sm:text-sm lg:text-base font-black tracking-wider">SCIENCE</div>
            <div className="text-xs sm:text-sm text-gray-600">PHYSICS • CHEM • BIO</div>
          </div>
          
          {/* Languages */}
          <div className="bg-white text-black p-2 sm:p-3 lg:p-4 border-2 sm:border-4 border-black text-center">
            <div className="text-xs sm:text-sm lg:text-base font-black tracking-wider">LANGUAGES</div>
            <div className="text-xs sm:text-sm text-gray-600">EN • ES • FR</div>
          </div>
          
          {/* Test Prep */}
          <div className="bg-black text-white p-2 sm:p-3 lg:p-4 border-2 sm:border-4 border-black text-center">
            <div className="text-xs sm:text-sm lg:text-base font-black tracking-wider">TEST PREP</div>
            <div className="text-xs sm:text-sm text-gray-300">SAT • ACT • AP</div>
          </div>
        </div>
      </div>
    </div>
  )
}