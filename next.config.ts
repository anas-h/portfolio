import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Build autonome : `.next/standalone` contient le serveur et les seules
   * dépendances nécessaires. C'est ce qui permet une image Docker légère,
   * sans `node_modules` complet dans l'étage final.
   */
  output: "standalone",
};

export default nextConfig;
