import React, { createContext, useState, useEffect, useContext } from 'react'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

type LocationContextProps = {
  location?: LocationObject | null
  setLocation?: (location: LocationObject) => void
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined)

export const LocationProvider = ({ children }: any) => {
  const [location, setLocation] = useState<LocationObject | null>(null)

  useEffect(() => {
    async function requestLocationPermission() {
      const { granted } = await requestForegroundPermissionsAsync()
      if (granted) {
        const currentPosition = await getCurrentPositionAsync()
        setLocation(currentPosition)
      }
    }

    requestLocationPermission()

    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 10
      },
      (newLocation) => {
        setLocation(newLocation)
      }
    )
  }, [])

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}
