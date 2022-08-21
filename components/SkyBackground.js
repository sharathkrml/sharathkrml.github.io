import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei"
const SkyBackground = () => {
  const [colorMap] = useTexture(["smoke.jpg"])
  console.log(colorMap)
  return (
    <>
      <PerspectiveCamera makeDefault position={[1, 1, 20]} />
      <OrbitControls />
      <ambientLight args={[0x555555]} />
      <directionalLight position={[0, 0, 1]} args={[0xffeedd]} />

      <mesh castShadow>
        <sphereBufferGeometry args={[1, 15, 15]} />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default SkyBackground
