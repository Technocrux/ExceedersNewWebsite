import { motion } from "framer-motion";

/**
 * Animated interconnected network / nodes diagram.
 * Pure SVG + Framer Motion — no stock imagery.
 * Represents the eXceeders marketplace: providers, talent, businesses, and
 * eXceeders as the orchestrating hub.
 */
export const NetworkDiagram = () => {
  // Central hub + orbital nodes
  const nodes = [
    { id: "hub", x: 260, y: 240, r: 34, color: "#059669", label: "eXceeders", core: true },
    { id: "n1", x: 90, y: 110, r: 18, color: "#43669E", label: "Providers" },
    { id: "n2", x: 430, y: 90, r: 18, color: "#9ED3CE", label: "Talent" },
    { id: "n3", x: 470, y: 320, r: 18, color: "#07404B", label: "Delivery" },
    { id: "n4", x: 340, y: 430, r: 18, color: "#059669", label: "Businesses" },
    { id: "n5", x: 100, y: 380, r: 18, color: "#43669E", label: "Partners" },
    { id: "n6", x: 180, y: 40, r: 12, color: "#C6E5DE" },
    { id: "n7", x: 500, y: 200, r: 12, color: "#C6E5DE" },
    { id: "n8", x: 60, y: 250, r: 12, color: "#C6E5DE" },
  ];

  const links = [
    ["hub", "n1"], ["hub", "n2"], ["hub", "n3"],
    ["hub", "n4"], ["hub", "n5"],
    ["n1", "n6"], ["n2", "n7"], ["n5", "n8"], ["n2", "n3"],
    ["n1", "n5"],
  ];

  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Background halo */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-pistachio/60 via-white to-brand-sea/40 blur-2xl opacity-70" />
      <div className="absolute inset-16 rounded-full border border-brand-emerald/20" />
      <div className="absolute inset-24 rounded-full border border-brand-emerald/15" />
      <div className="absolute inset-32 rounded-full border border-brand-emerald/10" />

      <svg
        viewBox="0 0 540 500"
        className="relative w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#43669E" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#059669" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Hub glow */}
        <circle cx={260} cy={240} r={120} fill="url(#hubGlow)" />

        {/* Links */}
        {links.map(([a, b], i) => {
          const A = nodeById[a];
          const B = nodeById[b];
          return (
            <motion.line
              key={`l-${i}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="url(#linkGrad)"
              strokeWidth={1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.9, ease: "easeOut" }}
            />
          );
        })}

        {/* Data pulses along key links */}
        {links.slice(0, 5).map(([a, b], i) => {
          const A = nodeById[a];
          const B = nodeById[b];
          return (
            <motion.circle
              key={`p-${i}`}
              r={3}
              fill="#059669"
              initial={{ cx: A.x, cy: A.y, opacity: 0 }}
              animate={{
                cx: [A.x, B.x, A.x],
                cy: [A.y, B.y, A.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: 1 + i * 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: "backOut" }}
          >
            {/* Floating micro-movement */}
            <motion.g
              animate={{
                translateX: [0, i % 2 ? 4 : -4, 0],
                translateY: [0, i % 3 ? -5 : 5, 0],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {n.core && (
                <>
                  <circle cx={n.x} cy={n.y} r={n.r + 16} fill={n.color} opacity={0.08} />
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={n.color}
                    initial={{ r: n.r, opacity: 0.25 }}
                    animate={{ r: [n.r, n.r + 22, n.r], opacity: [0.25, 0, 0.25] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                </>
              )}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={n.color}
                stroke="white"
                strokeWidth={n.core ? 3 : 2}
              />
              {n.core && (
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill="white"
                  fontFamily="Manrope"
                >
                  X
                </text>
              )}
            </motion.g>
            {n.label && !n.core && (
              <text
                x={n.x}
                y={n.y + n.r + 16}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#0D1F2D"
                fontFamily="Manrope"
              >
                {n.label}
              </text>
            )}
            {n.core && (
              <text
                x={n.x}
                y={n.y + n.r + 20}
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#0D1F2D"
                fontFamily="Manrope"
              >
                {n.label}
              </text>
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default NetworkDiagram;
