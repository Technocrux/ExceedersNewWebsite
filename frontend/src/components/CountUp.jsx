import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Animated count-up. Runs once when the element enters the viewport.
 */
export const CountUp = ({
  end = 100,
  duration = 1600,
  suffix = "",
  prefix = "",
  className = "",
  formatter,
  testId,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const from = 0;
    const to = end;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const display = formatter
    ? formatter(value)
    : Math.round(value).toLocaleString();

  return (
    <span ref={ref} className={className} data-testid={testId}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
