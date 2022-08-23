import { options } from "../../constants/tsoptions";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <Particles
      id="ts-particles"
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesComponent;
