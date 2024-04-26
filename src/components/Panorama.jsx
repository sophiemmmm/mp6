import {useState} from 'react';
import {useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import Box from './Box';



const backgrounds = [
    {
        id: 1,
        url: '/NYC.jpeg',
    },
    {
        id: 2,
        url: 'Panoramix.jpeg',
    },
];

export default function Panorama() {
    const [activeBackground, setActiveBackground] = useState(1);
    const { url } = backgrounds.find(({ id }) => id === activeBackground);
    const background = useLoader(THREE.TextureLoader, url);
    const geometry = new THREE.SphereGeometry( 500, 60, 40 );

    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={geometry} />
                <meshBasicMaterial side={THREE.BackSide} map={background} />
            </mesh>

            <group
                onClick={(e) => {
                    e.stopPropagation();
                    setActiveBackground(activeBackground === 1 ? 2 : 1);
                }}
            >
                <Box />
            </group>
        </group>
    );
}
