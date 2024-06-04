/* theme.ts */
import { background, extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },

    background: {
      color: 'var(--gray.100)',
    }
});