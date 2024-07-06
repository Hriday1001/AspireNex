import { useSpring } from "@react-spring/web";

function useReactSpring(index) {
  useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: index * 200, // Stagger the animation
  });
}

export default useReactSpring;