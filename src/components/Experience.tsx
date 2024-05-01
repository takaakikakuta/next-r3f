'use client'

import { Box, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function Experience() {
  return (
   <>
    <Canvas>
        <OrbitControls/>
        <Box>
            <meshNormalMaterial/>
        </Box>
    </Canvas>
   </>
  )
}

export default Experience
