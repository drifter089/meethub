'use client'
import type { TextFieldClientComponent } from 'payload'

import { TextField } from '@payloadcms/ui'
import React, { useState } from 'react'
import { APIProvider, Map, ControlPosition } from '@vis.gl/react-google-maps'

import { CustomMapControl } from './map-control'
import MapHandler from './map-handler'

declare global {
  var GOOGLE_MAPS_API_KEY: string | undefined
}

export type AutocompleteMode = { id: string; label: string }

export const CustomTextFieldClient: TextFieldClientComponent = (props) => {
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null)

  const API_KEY =
    (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string) ?? globalThis.GOOGLE_MAPS_API_KEY

  return (
    <>
      <TextField field={props?.field} path={props?.path} />
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundColor: 'red',
        }}
      >
        <APIProvider apiKey={API_KEY}>
          <Map
            defaultZoom={7}
            defaultCenter={{ lat: 13.7563, lng: 100.5018 }}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
          <CustomMapControl
            controlPosition={ControlPosition.TOP}
            onPlaceSelect={setSelectedPlace}
          />
          <MapHandler place={selectedPlace} />
        </APIProvider>
      </div>
    </>
  )
}
