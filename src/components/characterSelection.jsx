import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";
import { GymBro } from "./GymGirl";
import { Kate } from "./Kate";
import { James } from "./James";
import { Flex, Box } from '@react-three/flex'

const characters = [
  { id: 1, model: "../../models/rudy1.glb" },
  { id: 2, model: "../../models/rudy2.glb" },
  { id: 3, model: "../../models/rudy3.glb" },
  { id: 4, model: "../../models/rudy4.glb" },
];

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} />
          <Flex
       justifyContent="center" alignItems="center"
          >
            <group scale={0.45}>
                <Avatar />
            </group>
      <group>
            <Kate />
      </group>
        <group>
            <James />
        </group>
      <group>
            <GymBro />
      </group>
          </Flex>
    </>
    //   <div style={{ marginTop: 20 }}>
    //     {selectedCharacter ? (
    //       <div>Selected Character: {selectedCharacter}</div>
    //     ) : (
    //       <div>Select a Character</div>
    //     )}
    //   </div>
  );
}