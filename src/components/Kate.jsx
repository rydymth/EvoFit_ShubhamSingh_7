/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Kate.glb 
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Kate(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('../../models/Kate.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  console.log(names)
    useEffect(() => {
        actions[names[6]].reset().fadeIn(0.5).play();
    }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="kate" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Ch21_Body" geometry={nodes.Ch21_Body.geometry} material={materials.Ch21_body} skeleton={nodes.Ch21_Body.skeleton} />
          <skinnedMesh name="Ch21_Eyelasshes" geometry={nodes.Ch21_Eyelasshes.geometry} material={materials.Ch21_hair} skeleton={nodes.Ch21_Eyelasshes.skeleton} />
          <skinnedMesh name="Ch21_Hair" geometry={nodes.Ch21_Hair.geometry} material={materials.Ch21_hair} skeleton={nodes.Ch21_Hair.skeleton} />
          <skinnedMesh name="Ch21_Pants" geometry={nodes.Ch21_Pants.geometry} material={materials.Ch21_body} skeleton={nodes.Ch21_Pants.skeleton} />
          <skinnedMesh name="Ch21_Shirt" geometry={nodes.Ch21_Shirt.geometry} material={materials.Ch21_body} skeleton={nodes.Ch21_Shirt.skeleton} />
          <skinnedMesh name="Ch21_Shoes" geometry={nodes.Ch21_Shoes.geometry} material={materials.Ch21_body} skeleton={nodes.Ch21_Shoes.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../models/Kate.glb')
