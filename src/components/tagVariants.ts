export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "unity"
  | "blender"
  | "mixamo"
  | "quest"
  | "sketchfab"
  | "android"
  | "ar"
  | "vr"
  | "web"
  | "pc"
  | "mobile";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  unity: "Unity",
  blender: "Blender",
  mixamo: "Mixamo",
  quest: "Quest 2",
  sketchfab: "Sketchfab",
  android: "Android",
  ar: "AR",
  vr: "VR",
  web: "Web",
  pc: "PC",
  mobile: "Mobile",
} as const satisfies Record<TagVariant, string>;
