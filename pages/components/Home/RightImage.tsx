import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function RightImage() {
  const x = useMotionValue(10);
  const y = useMotionValue(10);

  const rotateX = useTransform(y, [0, 500], [0, -25]);
  const rotateY = useTransform(x, [0, 3000], [-25, 25]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMOuseOut(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(rect.left);
    y.set(rect.top);
  }

  return (
    <motion.div
      style={{
        width: 500,
        height: 400,
        placeItems: 'center',
        placeContent: 'center',
        perspective: 3000,
      }}
      onMouseMove={handleMouse}
      onMouseOut={handleMOuseOut}
    >
      <motion.img
        src="home-code.png"
        style={{
          width: 500,
          height: 400,
          borderRadius: 30,
          background: 'none',
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1,
        }}
      />
    </motion.div>
  );
}
