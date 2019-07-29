const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new error('Unable to get puzzle')
    }   
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status = 200){
    const countries = await response.json()
    return countries.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new error('cannot fetch country details')
    }
}

const getLocation = async () => {
   const response = await fetch('//ipinfo.io/json?token=f452f11cb3f090')
   if(response.status === 200){
       const location = await response.json()
       return location
   } else {
       throw new Error('Cannot fetch location details')
   }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
   return getCountryDetails(location.country)
}

export { getPuzzle as default }